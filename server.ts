import { createRequestHandler } from "@remix-run/node";
import { createServer } from "node:http";
import { createServer as createUnixServer } from "node:net";
import { parse } from "node:url";
import type { ServerBuild } from "@remix-run/node";
import * as build from "@remix-run/dev/server-build";

const mode = process.env.NODE_ENV;

const requestHandler = createRequestHandler({
  build: build as unknown as ServerBuild,
  mode,
});

if (mode === "production") {
  // Production: Unix socket
  const unixServer = createUnixServer();
  
  unixServer.on("connection", (socket) => {
    socket.on("data", (data) => {
      const parsedUrl = parse(data.toString(), true);
      const req = new Request(`http://localhost${parsedUrl.pathname}`, {
        method: "GET",
        headers: new Headers(),
      });
      const res = {
        write: (chunk: any) => socket.write(chunk),
        end: () => socket.end(),
      };
      requestHandler(req, res as any);
    });
  });

  const socketPath = "/tmp/susanne.sock";
  unixServer.listen(socketPath, () => {
    console.log(`🚀 Production server listening on Unix socket: ${socketPath}`);
  });
} else {
  // Development: TCP
  const httpServer = createServer(async (req, res) => {
    const parsedUrl = parse(req.url || "", true);
    const request = new Request(`http://localhost${parsedUrl.pathname}`, {
      method: req.method || "GET",
      headers: new Headers(req.headers as Record<string, string>),
    });
    await requestHandler(request, res as any);
  });

  const port = process.env.PORT || 3000;
  httpServer.listen(port, () => {
    console.log(`🚀 Development server listening on http://localhost:${port}`);
  });
} 
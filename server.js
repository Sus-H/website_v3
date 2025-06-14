import { createRequestHandler } from "@remix-run/node";
import { createServer } from "node:http";
import { createServer as createUnixServer } from "node:net";
import { parse } from "node:url";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const mode = process.env.NODE_ENV;

// Read the build assets
const buildPath = join(__dirname, "build/client");
const assetsPath = join(buildPath, "assets");

// Create a simple build object that Remix can use
const build = {
  assets: assetsPath,
  entry: {
    module: join(buildPath, "index.html"),
    imports: [],
  },
  routes: {},
  publicPath: "/build/",
};

const requestHandler = createRequestHandler({
  build,
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
        write: (chunk) => socket.write(chunk),
        end: () => socket.end(),
      };
      requestHandler(req, res);
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
      headers: new Headers(req.headers),
    });
    await requestHandler(request, res);
  });

  const port = process.env.PORT || 3000;
  httpServer.listen(port, () => {
    console.log(`🚀 Development server listening on http://localhost:${port}`);
  });
} 
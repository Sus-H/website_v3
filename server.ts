import { createRequestHandler } from "@remix-run/node";
import { createServer } from "node:http";
import { parse } from "node:url";
import type { ServerBuild } from "@remix-run/node";
import * as build from "@remix-run/dev/server-build";

const mode = process.env.NODE_ENV;

// Create a request handler for your Remix app
const requestHandler = createRequestHandler(build as unknown as ServerBuild, mode);

// Create a standard HTTP server
const httpServer = createServer(async (req, res) => {
  const parsedUrl = parse(req.url || "", true);
  const request = new Request(`http://localhost${parsedUrl.pathname}`, {
    method: req.method || "GET",
    headers: new Headers(req.headers as Record<string, string>),
  });
  await requestHandler(request, res as any);
});

// Listen on the port specified by the environment variable, defaulting to 3000
const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
}); 
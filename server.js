"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("@remix-run/node");
const node_http_1 = require("node:http");
const node_url_1 = require("node:url");
const build = require("@remix-run/dev/server-build");
const mode = process.env.NODE_ENV;
// Create a request handler for your Remix app
const requestHandler = (0, node_1.createRequestHandler)(build, mode);
// Create a standard HTTP server
const httpServer = (0, node_http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedUrl = (0, node_url_1.parse)(req.url || "", true);
    const request = new Request(`http://localhost${parsedUrl.pathname}`, {
        method: req.method || "GET",
        headers: new Headers(req.headers),
    });
    yield requestHandler(request, res);
}));
// Listen on the port specified by the environment variable, defaulting to 3000
const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
});

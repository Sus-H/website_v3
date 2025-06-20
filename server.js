import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
// Serve static assets from the 'public' directory first
// This allows overriding files in the build folder, e.g., for favicons
app.use(express.static(path.join(__dirname, 'public')));
// Serve static assets from the 'build/client' directory
// This is where Remix places your JS and CSS bundles
app.use(express.static(path.join(__dirname, 'build/client')));
// For any request that doesn't match a static file, serve the index.html
// This is the core of an SPA server, enabling client-side routing.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/client', 'index.html'));
});
// Start the server
app.listen(port, () => {
    console.log(`🚀 Express server listening on http://localhost:${port}`);
});

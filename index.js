const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
const publicDir = path.join(__dirname, "public");

function createServer() {
  return http.createServer((req, res) => {
    if (req.url !== "/") {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }

    const html = fs.readFileSync(path.join(publicDir, "index.html"), "utf8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  });
}

if (require.main === module) {
  createServer().listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
}

module.exports = { createServer };

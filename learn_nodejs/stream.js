const { readFileSync, readFile } = require("fs");
const http = require("http");

const homepage = readFileSync("./templates/index.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  }
});

server.listen(5000);

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

// we can read index.html, however, we cant read style.css like this, we have to manually import it into the file, such as:
// if url = /home/style.css
//res.writeHead(200, { "content-type": "text/css" });
// write(css)

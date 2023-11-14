const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("hello server");
    res.end();
  } else if (req.url == "/about") {
    res.write("this is about page");
    res.end();
  } else {
    res.end("<h1>Oops</h1>");
  }
});

server.listen(5000);

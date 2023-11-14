const http = require("http");
const EventEmitter = require("events");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome", () => {
    console.log("here");
  });
});
server.listen(5000);

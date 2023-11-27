const express = require("express");
const logger = require("./middleware_method");
const app = express();

app.use(logger); //use this for all route
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("Listenong on port 5000..");
});

const express = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const app = express();
app.use(express.static("../navbar-app"));
// app.get
// app.post
// app.put
// app.delete
// app.all

app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});

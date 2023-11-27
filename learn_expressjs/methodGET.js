const express = require("express");
app = express();

let people = require("./data");
//get data from db
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("Listenong on port 5000..");
});

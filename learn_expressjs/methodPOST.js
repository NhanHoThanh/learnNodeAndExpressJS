const express = require("express");
const app = express();
const path = require("path");
let { people } = require("./data");
const session = require("express-session");

// static assets
app.use(express.static("./methods_public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use(session({ secret: "your-secret-key", cookie: { maxAge: 60000 } }));

app.post("/login", (req, res) => {
  const name = req.body.name;
  if (name) {
    // Store the name in the session
    req.session.name = name;
    return res.status(200).send(`Logged in as ${name}`);
  }
  res.status(400).send("Name is required");
});

app.get("/dashboard", (req, res) => {
  if (req.session.name) {
    res.send(`Welcome to your dashboard, ${req.session.name}`);
  } else {
    res.status(401).send("Please log in first");
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

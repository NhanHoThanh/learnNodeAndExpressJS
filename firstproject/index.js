const express = require("express");
const router = require("./routes/userRoute");

const app = express();

app.use(express.json());

app.use("/people", router);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

const express = require("express");
const games = require("./games.json");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/games", (req, res) => {
  res.send(games);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 7777;
}

app.get("/port", (req, res) => {
  req.get("user-agent");
  res.send(`This server runs on port: ${port}`);
});

app.listen(port, () => {
  console.log(`Welcome to Video Games!, Listening on port: ${port}`);
});

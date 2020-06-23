const express = require("express");
const games = require("./games.json");
const app = express();

const messages = [];

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
  console.log(req.get("user-agent"));
  res.send(`This server runs on port: ${port}`);
});

app.get("/say", (req, res) => {
  const msg = req.query.m;
  messages.push(msg);
  console.log(msg);
  res.send(messages);
});

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.listen(port, () => {
  console.log(`Welcome to Video Games!, Listening on port: ${port}`);
});

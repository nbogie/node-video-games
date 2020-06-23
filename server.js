const express = require("express");
const games = require("./games.json");
const app = express();

app.get("/games", (req, res) => {
  res.send(games);
});

app.listen(3000, () => {
  console.log("Welcome to Video Games!", "Listening on port: 3000");
});

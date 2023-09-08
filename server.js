const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const posts = [
  {
    username: "Name1",
    title: "Post1",
  },
  {
    username: "Name2",
    title: "Post2",
  },
  {
    username: "Name3",
    title: "Post3",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  res.json(username);
});

app.listen(3000);

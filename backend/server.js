const express = require("express");

const app = express();

PORT = 8000;

app.use((req, res, next) => {
  console.log("you are in middleware mode");
  console.log(Error);
  next();
});

app.get("/", (req, res) => {
  res.send("hello 🍃🌱🔥");
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
  console.log(`http://localhost:${PORT}`);
});

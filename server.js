const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Mong code không bug");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

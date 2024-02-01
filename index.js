const express = require("express");
const app = express();

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});

const mongoose = require("mongoose");
const express = require("express");
const logger = require("./middleware/logger");
const config = require("config");
const courses = require("./routes/courses");
const posts = require("./routes/posts");
const app = express();
app.use(express.json());

// app.use(logger);

app.set("view engine", "pug");
app.set("views", "./views");

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.render("index", {
    title: "Simple Node APP",
    message: "Hello World",
  });
});

app.use("/api/courses", courses);
app.use("/api/posts", posts);

console.log("Application Name: ", config.get("name"));
console.log("Mail Server: ", config.get("mail.host"));

app.listen(port, () => {
  console.log("Listening on port: ", port);
});

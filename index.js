const express = require("express");
const app = express();

const courses = [
  {
    id: 1,
    name: "Node JS",
  },
  {
    id: 2,
    name: "Python Django",
  },
  {
    id: 3,
    name: "ASP Dot Net",
  },
];

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send("Requested course is not found");
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});

const express = require("express");
const logger = require("./logger");
const app = express();
app.use(express.json());
app.use(logger);

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

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res
      .status(400)
      .send("Course name must be required and minimum 3 characters. ");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Requested course is not found");
  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Requested course is not found");

  const index = courses.indexOf(course);

  courses.splice(index, 1);
  res.send(course);
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});

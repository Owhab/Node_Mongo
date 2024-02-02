const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send("Requested course is not found");
  res.send(course);
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Requested course is not found");
  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Requested course is not found");

  const index = courses.indexOf(course);

  courses.splice(index, 1);
  res.send(course);
});

module.exports = router;

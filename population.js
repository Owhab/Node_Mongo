const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to Mongodb.."))
  .catch((error) => console.log("Failed to connect Mongodb.."));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});
const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: authorSchema,
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name: name,
    bio: bio,
    website: website,
  });
  const result = await author.save();
  console.log("result: ", result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });
  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find()
    .populate("author", "name -_id")
    .select("name author");
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = "Abdul Owhab";
  course.save();
  console.log(course);
}

updateAuthor("65c1231a5445587c49ba2164");

// createAuthor("Owhab", "None", "Test");
// createCourse("Full Stack Development", new Author({ name: "Owhab" }));
// listCourses();

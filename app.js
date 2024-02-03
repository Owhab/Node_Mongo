const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() =>
    console.log("Successfully connected to the mongodb local database..")
  )
  .catch((error) => console.log("Failed to connect to the mongodb database.."));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  isPublished: Boolean,
  Date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

async function CreateCourse() {
  const course = new Course({
    name: "JavaScript Development",
    author: "Abdul Owhab",
    tags: ["Frontend", "Backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}
CreateCourse();

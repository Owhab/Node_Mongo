const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() =>
    console.log("Successfully connected to the mongodb local database..")
  )
  .catch((error) =>
    console.log("Failed to connect to the mongodb database..", error.message)
  );

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function CreateCourse() {
  const course = new Course({
    name: "MERN Stack Development",
    author: "Owhab",
    tags: ["Frontend", "Backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log("Created Course: ", result);
}

// CreateCourse();

async function GetCourses() {
  const result = await Course.find()
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log("All Courses: ", result);
}

// GetCourses();

// Update Course in Query First Approach
// async function UpdateCourse(id) {
//   const course = await Course.findById(id);
//   if (!course) return;

//   course.isPublished = false;
//   course.author = "Abdul Owhab";
//   const result = await course.save();
//   console.log("Course updated: ", result);
// }

async function UpdateCourse(id) {
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        isPublished: false,
        author: "Owhab",
      },
    },
    { new: true }
  );
  console.log("Course Data Updated: ", course);
}

// UpdateCourse("65be5782c3b0b14559c230a4");

// Delete a course
async function RemoveCourse(id) {
  // const result = await Course.deleteOne({ _id: id });
  const course = await Course.findByIdAndDelete({ _id: id });
  console.log("Course Deleted Successfully", course);
}

RemoveCourse("65be4e199412a435cf970184");

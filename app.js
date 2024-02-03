const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() =>
    console.log("Successfully connected to the mongodb local database..")
  )
  .catch((error) => console.log("Failed to connect to the mongodb database.."));

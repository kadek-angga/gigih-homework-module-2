const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/gigih_homework", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

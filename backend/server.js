require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogs");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/blogs", blogRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for response
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const express = require("express");
const {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogsController");

const router = express.Router();

//Get all blogs
router.get("/", getAllBlogs);

//GET a single Blog
router.get("/:id", getSingleBlog);

//POST (Create) a new Blog
router.post("/", createBlog);

//Delete a  Blog
router.delete("/:id", deleteBlog);

//UPDATE a Blog
router.patch("/:id", updateBlog);

module.exports = router;

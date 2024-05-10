const express = require("express");
const {
  getAllBlogs,
  getAllBlogsOfOneUser,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogsController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//Get all blogs
router.get("/", getAllBlogs);

//GET a single Blog
router.get("/:id", getSingleBlog);

// requireAuth for blogs route
router.use(requireAuth);

//POST (Create) a new Blog
router.post("/", createBlog);

//Delete a  Blog
router.delete("/:id", deleteBlog);

//UPDATE a Blog
router.patch("/:id", updateBlog);

// //GET all blogs of a single user
router.get("/my-blogs", getAllBlogsOfOneUser);

module.exports = router;

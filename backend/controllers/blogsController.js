const Blog = require("../models/blogsModel");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");
//Get all blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

//Get a specific user's all blogs
const getAllBlogsOfOneUser = async (req, res) => {
  const user_id = req.user._id;

  console.log("User ID:", req.user);

  const blogs = await Blog.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

//GET a single Blog
const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No such blog" });
  }

  res.status(200).json(blog);
};

//POST (Create) a new Blog
const createBlog = async (req, res) => {
  const { title, snippet, body } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!snippet) {
    emptyFields.push("snippet");
  }
  if (!body || body.length === 0) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields ", emptyFields });
  }
  try {
    const user_id = req.user._id;
    const blog = await Blog.create({ title, snippet, body, user_id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a  Blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findByIdAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "No such blog" });
  }

  res.status(200).json(blog);
};

//UPDATE a Blog
const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!blog) {
    return res.status(404).json({ error: "No such blog" });
  }
};

module.exports = {
  getAllBlogs,
  getAllBlogsOfOneUser,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};

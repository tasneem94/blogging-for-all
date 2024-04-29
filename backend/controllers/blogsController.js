const Blog = require("../models/blogsModel");
const mongoose = require("mongoose");

//Get all blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

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

  try {
    const blog = await Blog.create({ title, snippet, body });
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
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};

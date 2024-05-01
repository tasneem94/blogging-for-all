import { Link } from "react-router-dom";

const BlogsDetails = ({ blog }) => {
  return (
    <div className="blogs-details">
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-snippet">{blog.snippet}</p>
      {/* <div>
        {blog.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div> */}
      <Link to={`/blogs/${blog._id}`}>
        <p className="read-blog">Click to read full blog</p>
      </Link>
    </div>
  );
};

export default BlogsDetails;

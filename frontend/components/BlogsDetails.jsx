import { Link } from "react-router-dom";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

const BlogsDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/blogs/${blog._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOGS", payload: data });
    }
  };

  return (
    <div className="blogs-details">
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-snippet">{blog.snippet}</p>
      <div className="material-symbols-outlined del-btn" onClick={handleClick}>
        delete
      </div>
      <p>
        Added{" "}
        {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
      </p>
      <Link to={`/blogs/${blog._id}`}>
        <p className="read-blog">Click to read full blog</p>
      </Link>
    </div>
  );
};

export default BlogsDetails;

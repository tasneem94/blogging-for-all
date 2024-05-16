import { useState } from "react";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

const BlogsDetails = ({ blog, myBlogsSelected }) => {
  const { dispatch } = useBlogsContext();
  const { user } = useAuthContext();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = async () => {
    if (!user) {
      return;
    }
    setShowConfirmation(true);
  };

  const handleDelete = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/blogs/${blog._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOGS", payload: data });
    }

    // setShowConfirmation(false);
  };

  return (
    <div className="blogs-details">
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-snippet">{blog.snippet}</p>
      {user && myBlogsSelected && !showConfirmation && (
        <div
          className="material-symbols-outlined del-btn"
          onClick={handleClick}
        >
          delete
        </div>
      )}
      {showConfirmation && (
        <div className="del-confirmation">
          <p>Are you sure you want to delete this blog?</p>
          <span className="confirm-btn" onClick={handleDelete}>
            Yes
          </span>
          <span
            className="cancel-btn"
            onClick={() => setShowConfirmation(false)}
          >
            Cancel
          </span>
        </div>
      )}
      <p className="created-time">
        Added{" "}
        {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
      </p>
      <Link to={`/${blog._id}`}>
        <p className="read-blog">Click to read full blog</p>
      </Link>
    </div>
  );
};

export default BlogsDetails;

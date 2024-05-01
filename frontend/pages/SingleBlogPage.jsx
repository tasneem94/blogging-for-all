import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchSingleBlog = async () => {
      const response = await fetch(`${import.meta.env.VITE_URL}/blogs/${id}`);
      const data = await response.json();

      if (response.ok) {
        setBlog(data);
      }
    };
    fetchSingleBlog();
  }, [id]);

  return (
    <div>
      {blog && (
        <div className="single-blog">
          <h3 className="blog-title">{blog.title}</h3>
          <div>
            {blog.body.map((paragraph, index) => (
              <p className="blog-body" key={index}>
                {paragraph}
                <br />
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogPage;

import { useEffect, useState } from "react";
import BlogsDetails from "../components/BlogsDetails";
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${import.meta.env.VITE_URL}/blogs`);
      const data = await response.json();

      if (response.ok) {
        setBlogs(data);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="home">
      <div>
        {blogs &&
          blogs.map((blog) => <BlogsDetails key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Home;

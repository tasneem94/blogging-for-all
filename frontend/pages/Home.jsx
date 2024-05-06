import { useEffect } from "react";
import BlogsDetails from "../components/BlogsDetails";
import { useBlogsContext } from "../hooks/useBlogsContext";
const Home = () => {
  const { blogs, dispatch } = useBlogsContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${import.meta.env.VITE_URL}/blogs`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: data });
      }
    };
    fetchBlogs();
  }, [dispatch]);

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

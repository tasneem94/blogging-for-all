import { useEffect, useState } from "react";
import BlogsDetails from "../components/BlogsDetails";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const MyBlogs = () => {
  const [myBlogsSelected, setMyBlogsSelected] = useState(true);
  const { blogs, dispatch } = useBlogsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/blogs/my-blogs`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: data });
      }
    };
    if (user) {
      fetchBlogs();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div>
        {blogs &&
          blogs.map((blog) => (
            <BlogsDetails
              key={blog._id}
              blog={blog}
              myBlogsSelected={myBlogsSelected}
            />
          ))}
      </div>
    </div>
  );
};

export default MyBlogs;

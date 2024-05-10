import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import SingleBlogPage from "../pages/SingleBlogPage";
import CreateBlog from "../pages/CreateBlog";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { useAuthContext } from "../hooks/useAuthContext";
import MyBlogs from "../pages/MyBlogs";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/blogs" element={<Home />} />
            <Route path="/" element={<Navigate to="/blogs" />} />
            <Route path="/:id" element={<SingleBlogPage />} />
            <Route
              path="/create"
              element={user ? <CreateBlog /> : <Navigate to="/blogs" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/my-blogs"
              element={user ? <MyBlogs /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

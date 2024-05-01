import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import SingleBlogPage from "../pages/SingleBlogPage";
import CreateBlog from "../pages/CreateBlog";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/blogs" element={<Home />} />
            <Route path="/" element={<Navigate to="/blogs" />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />
            {/* <Route path="/create" element={<CreateNewBlog />} /> */}
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

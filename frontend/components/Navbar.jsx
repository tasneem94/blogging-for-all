import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/blogs">
          <h1>Blogging For All</h1>
        </Link>
        <Link to="/create">
          <div>Add a new blog</div>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;

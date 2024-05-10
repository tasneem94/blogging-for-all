import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header>
      <div className="container">
        <Link to="/blogs">
          <h1>Blogging For All</h1>
        </Link>
        <div>
          {!user && (
            <div>
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/signup" className="signup-link">
                Signup
              </Link>
            </div>
          )}

          {user && (
            <div>
              <span className="user-name">{user.email}</span>
              <Link to="/my-blogs" className="my-blogs-link">
                My Blogs
              </Link>
              <Link to="/create" className="add-blog-link">
                Add a new blog
              </Link>
              <button
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;

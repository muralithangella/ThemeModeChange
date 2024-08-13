import { Link } from "react-router-dom";
import { useTheme } from "../themecontext";
const Nav = () => {
  const { Theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  );
};

export default Nav;

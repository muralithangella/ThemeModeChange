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
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={Theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Nav;

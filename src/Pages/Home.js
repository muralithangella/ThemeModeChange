import { useTheme } from "../themecontext";

const Home = () => {
  const { Theme } = useTheme();
  return (
    <div className={`page ${Theme}`}>
      <h1>Home Page</h1>
      <p>Welcome to Home Page</p>
    </div>
  );
};

export default Home;

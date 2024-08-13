import { useTheme } from "../themecontext";

const Blogs = () => {
  const { Theme } = useTheme();
  return <div className={`page ${Theme}`}>Visit blogs for latest Updates</div>;
};

export default Blogs;

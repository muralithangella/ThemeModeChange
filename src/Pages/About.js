import { useTheme } from "../themecontext";

const About = () => {
  const { Theme } = useTheme();
  return (
    <div className={`page ${Theme}`}>
      <h1>About Page</h1>
      <p>Fill the details to call back</p>
    </div>
  );
};

export default About;

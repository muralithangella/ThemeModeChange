import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import NavBar from "./Components/Nav";
import { ThemeProvider } from "./themecontext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

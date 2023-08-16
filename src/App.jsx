import { useEffect, useState } from "react";
import { useTheme } from "./context/theme/ThemeContext";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [display, setDisplay] = useState(window.innerWidth);
  const { theme } = useTheme();

  function handleResize() {
    setDisplay(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (display <= 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [display]);

  return (
    <>
      <div className="w-full h-screen overflow-hidden flex">
        <div
          className={`w-full h-full ${
            isSidebarOpen ? "max-w-[250px] p-4" : "max-w-[50px] p-2"
          } ${
            theme === "light"
              ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
              : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
          } text-md font-bold transition-all ease-in-out duration-300`}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <div className="w-full h-full flex flex-col">
          <div
            className={`w-full max-h-[50px] p-4 flex justify-between items-center ${
              theme === "light"
                ? "bg-gradient-to-r from-slate-100 to-slate-400 text-black"
                : "bg-gradient-to-r from-slate-500 to-slate-900 text-white"
            } text-md font-bold transition-all ease-in-out duration-300`}
          >
            <Header
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
          <div
            className={`w-full h-full p-4 text-xl font-bold overflow-auto ${
              theme === "light" ? "text-black" : "bg-slate-400 text-white"
            }`}
          >
            <Router>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

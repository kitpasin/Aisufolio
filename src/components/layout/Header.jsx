import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useTheme } from "../../context/theme/ThemeContext";
import { useEffect } from "react";
import { usePage } from "../../context/page/PageContext";
import { useLanguage } from "../../context/language/LanguageContext";
function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const { page, setPage } = usePage();

  useEffect(() => {
    if (language === "en") {
      setPage(localStorage.getItem("currentPageEN"));
    } else if (language === "th") {
      setPage(localStorage.getItem("currentPageTH"));
    }
  }, [language]);

  function handlerToggleTheme() {
    toggleTheme();
  }

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [toggleTheme]);

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </div>
      <p className="text-xl">
        {language === "en" ? page || "About Me" : page || "เกี่ยวกับฉัน"}
      </p>
      <div className="cursor-pointer" onClick={handlerToggleTheme}>
        {theme === "light" ? <NightlightIcon /> : <LightModeIcon />}
      </div>
    </>
  );
}

export default Header;

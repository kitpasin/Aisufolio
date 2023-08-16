import { Link } from "react-router-dom";
import { SidebarMenu } from "../../data/sidebar/SidebarMenu";
import { useLanguage } from "../../context/language/LanguageContext";
import { useTheme } from "../../context/theme/ThemeContext";
import { usePage } from "../../context/page/PageContext";
function Sidebar({ isSidebarOpen }) {
  const { theme } = useTheme();
  const { page, setPage } = usePage();
  const { language, setLanguage } = useLanguage();

  function handlerSetPage(menu) {
    if (language === "en") {
      localStorage.setItem("currentPageEN", menu.title_en);
      localStorage.setItem("currentPageTH", menu.title_th);
      setPage(menu.title_en);
    } else if (language === "th") {
      localStorage.setItem("currentPageTH", menu.title_th);
      localStorage.setItem("currentPageEN", menu.title_en);
      setPage(menu.title_th);
    }
  }

  function handlerChangeLanguage(value) {
    localStorage.setItem("currentLanguage", value);
    setLanguage(value);
  }

  return (
    <>
      <div className="flex flex-col gap-4 text-center mb-4">
        {isSidebarOpen && <p className="text-4xl">Portfolio</p>}
        <figure className="rounded-full shadow-md w-full max-w-[150px] m-auto">
          <img
            className="w-full rounded-full"
            src="/images/profile.jpg"
            alt="Profile"
          />
        </figure>
      </div>
      {isSidebarOpen && (
        <p className="text-xl">{language === "en" ? "Language" : "ภาษา"}</p>
      )}
      <div
        className={`flex ${
          !isSidebarOpen && "flex-col"
        } items-center my-4 gap-4 rounded-md`}
      >
        <button
          onClick={(e) => handlerChangeLanguage(e.target.value)}
          value="en"
          className={`w-full rounded-md shadow-md ${
            isSidebarOpen ? "p-2" : "p-1"
          } ${
            theme === "light"
              ? "bg-slate-100 hover:bg-slate-200"
              : "bg-slate-500 hover:bg-slate-600"
          } ${
            language === "en" && theme === "light"
              ? "bg-slate-400"
              : "bg-slate-100"
          } ${
            language === "en" && theme === "dark"
              ? "bg-slate-900"
              : "bg-slate-100"
          }`}
        >
          EN
        </button>
        <button
          onClick={(e) => handlerChangeLanguage(e.target.value)}
          value="th"
          className={`w-full rounded-md shadow-md ${
            isSidebarOpen ? "p-2" : "p-1"
          } ${
            theme === "light"
              ? "bg-slate-100 hover:bg-slate-200"
              : "bg-slate-500 hover:bg-slate-600"
          } ${
            language === "th" && theme === "light"
              ? "bg-slate-400"
              : "bg-slate-100"
          } ${
            language === "th" && theme === "dark"
              ? "bg-slate-900"
              : "bg-slate-100"
          }`}
        >
          TH
        </button>
      </div>
      {isSidebarOpen && (
        <p className="text-xl">{language === "en" ? "Menu" : "เมนู"}</p>
      )}
      {SidebarMenu.map((menu) => (
        <Link to={menu.path} key={menu.id} onClick={() => handlerSetPage(menu)}>
          <div
            className={`flex justify-start items-end gap-4 my-4 ${
              isSidebarOpen ? "p-2" : "p-1"
            } ${
              theme === "light"
                ? "bg-slate-100 hover:bg-slate-200"
                : "bg-slate-500 hover:bg-slate-600"
            } ${
              theme === "light" &&
              (page === menu.title_en || page === menu.title_th) &&
              "bg-slate-400"
            } ${
              theme === "dark" &&
              (page === menu.title_en || page === menu.title_th) &&
              "bg-slate-900"
            } rounded-md shadow-md cursor-pointer`}
          >
            <figure>{menu.icon}</figure>
            {isSidebarOpen && (
              <p>{language === "en" ? menu.title_en : menu.title_th}</p>
            )}
          </div>
        </Link>
      ))}
    </>
  );
}

export default Sidebar;

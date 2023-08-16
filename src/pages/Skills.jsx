import { useTheme } from "../context/theme/ThemeContext";
import { Languages } from "../data/skills/Languages";
import { LibrariesAndFrameworks } from "../data/skills/LibrariesAndFrameworks";
import { UXUIAndDesign } from "../data/skills/UXUIAndDesign";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

function Skills() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    () => clearTimeout(timeout);
  }, [loading]);

  return (
    <>
      {loading ? (
        <PulseLoader color={`${theme === "light" ? "#94a3b8" : "#64748b"}`} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1280px] m-auto mb-20">
          <div
            className={`${
              theme === "light"
                ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
                : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
            } p-4 rounded-md shadow-md transition-all ease-in-out duration-300`}
          >
            <p className="text-center">Languages</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {Languages?.map((list) => (
                <div key={list.id} className="flex flex-col gap-4 text-center">
                  <figure className="bg-white rounded-full w-full max-w-[100px] m-auto shadow-md">
                    <img
                      className="w-full h-full max-h-[100px] rounded-full"
                      src={list.icon}
                      alt={list.title}
                    />
                  </figure>
                  <p>{list.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${
              theme === "light"
                ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
                : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
            } p-4 rounded-md shadow-md transition-all ease-in-out duration-300`}
          >
            <p className="text-center">Libraries And Frameworks</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {LibrariesAndFrameworks?.map((list) => (
                <div key={list.id} className="flex flex-col gap-4 text-center">
                  <figure className="bg-white rounded-full w-full max-w-[100px] m-auto shadow-md">
                    <img
                      className="w-full h-full rounded-full p-1"
                      src={list.icon}
                      alt={list.title}
                    />
                  </figure>
                  <p>{list.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${
              theme === "light"
                ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
                : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
            } p-4 rounded-md shadow-md transition-all ease-in-out duration-300`}
          >
            <p className="text-center">UX/UI And Design</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {UXUIAndDesign?.map((list) => (
                <div key={list.id} className="flex flex-col gap-4 text-center">
                  <figure className="bg-white rounded-full w-full max-w-[100px] m-auto shadow-md">
                    <img
                      className="w-full h-full rounded-full p-1"
                      src={list.icon}
                      alt={list.title}
                    />
                  </figure>
                  <p>{list.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;

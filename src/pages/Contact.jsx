import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { Contacts } from "../data/contact/Contacts";
import { useTheme } from "../context/theme/ThemeContext";
function Contact() {
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
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-auto max-w-[1280px]">
            {Contacts?.map((contact) => (
              <div
                key={contact.id}
                className={`${
                  theme === "light"
                    ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
                    : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
                } w-full flex flex-col items-center p-4 gap-4 rounded-md shadow-md`}
              >
                <figure className="bg-white rounded-full w-full h-[150px] max-w-[150px]">
                  <img
                    className="w-full h-full rounded-full"
                    src={contact.icon}
                    alt={contact.title}
                  />
                </figure>
                <p>{contact.title}</p>
                <a
                  href={
                    contact.url &&
                    "https://www.facebook.com/profile.php?id=100001871467738"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    contact.url && "underline hover:animate-pulse"
                  }`}
                >
                  {contact.url
                    ? "Aisu Kitpasin"
                    : contact.gmail
                    ? contact.gmail
                    : contact.number && contact.number}
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Contact;

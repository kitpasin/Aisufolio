import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useTheme } from "../context/theme/ThemeContext";
import { Works } from "../data/works/Works";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "../context/language/LanguageContext";
function Work() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const { language } = useLanguage();

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[1280px] m-auto mb-20">
          {Works?.map((work) => (
            <div
              key={work.id}
              className={`${
                theme === "light"
                  ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
                  : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
              } w-full p-4 rounded-md shadow-md transition-all ease-in-out duration-300`}
            >
              <p className="text-center">{work.title}</p>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="my-4"
              >
                {work.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img
                      className="rounded-md"
                      src={image.path}
                      alt={work.title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="my-4 indent-12">
                {language === "en" ? work.description_en : work.description_th}
              </p>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:animate-pulse flex justify-center max-w-[300px] m-auto"
              >
                {work.url}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Work;

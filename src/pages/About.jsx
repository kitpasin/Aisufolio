import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useTheme } from "../context/theme/ThemeContext";
import { useLanguage } from "../context/language/LanguageContext";

function About() {
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
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
        <div className="w-full max-w-[1280px] m-auto mb-20">
          <div className={`flex flex-col gap-4`}>
            <figure className="w-full h-[300px] max-w-[300px] rounded-full shadow-md m-auto">
              <img
                className="w-[full] h-full rounded-full"
                src="/images/about.jpg"
                alt="Profile"
              />
            </figure>
            <div
              className={`${
                theme === "light"
                  ? "bg-gradient-to-b from-slate-100 to-slate-400 text-black"
                  : "bg-gradient-to-b from-slate-500 to-slate-900 text-white"
              } flex flex-col gap-4 w-full p-4 rounded-md shadow-md`}
            >
              {language === "en" ? (
                <>
                  <p className="indent-12">
                    Hello! I'm Kitpasin Wattanachaipon, a passionate and
                    detail-oriented frontend developer with 1 years of
                    experience in crafting user-centric and visually appealing
                    web applications. I specialize in turning design concepts
                    into responsive and interactive user interfaces, creating
                    seamless user experiences that leave a lasting impression.
                  </p>
                  <p className="indent-12">
                    My journey in the world of web development started with a
                    strong curiosity for how things work on the internet. Over
                    the years, I've honed my skills in HTML, CSS, and
                    JavaScript, and I'm well-versed in modern frontend
                    frameworks such as React and Next.js. I enjoy working
                    collaboratively with designers and back-end developers to
                    bring projects to life, all while maintaining clean code and
                    adhering to best practices.
                  </p>
                  <p className="indent-12">
                    If you're looking for a dedicated frontend developer who can
                    bring your ideas to life while ensuring a delightful user
                    experience, I'd love to hear from you. Let's work together
                    to create the next generation of web applications that
                    inspire and engage users.
                  </p>
                </>
              ) : (
                <>
                  <p className="indent-12">
                    สวัสดีครับ ผม กฤษฎิ์พศิน วัฒนาชัยผล ปัจจุบัน
                    มีตำแหน่งงานเป็น Frontend Developer
                    มีความกระตือรือร้นและความใส่ใจในรายละเอียด ด้วยประสบการณ์ 1
                    ปีในการสร้างเว็บแอปพลิเคชันที่เน้นผู้ใช้เป็นศูนย์กลาง
                    มีความเชี่ยวชาญในการออกแบบ และพัฒนา UX/UI
                    เพื่อให้ผู้ใช้สามารถตอบสนอง
                    และโต้ตอบกับเว็บแอปพลิเคชันได้อย่างมีประสิทธิภาพ
                  </p>
                  <p className="indent-12">
                    จุดเริ่มต้นของผมในการพัฒนาเว็บไซต์เริ่มต้นขึ้นตจากความอยากรู้อยากเห็นว่าสิ่งต่างๆ
                    ทำงานอย่างไรบนอินเทอร์เน็ต
                    ในช่วงหลายปีที่ผ่านมาผมได้ฝึกฝนทักษะต่างๆ
                    ที่ใช้ในการพัฒนาเว็บแอปพลิเคชัน ตั้งแต่ HTML, CSS,
                    JavaScript ไปจนถึงเฟรมเวิร์กและไลบราลี่ต่างๆ ที่ทันสมัย เช่น
                    React และ Next.js ผมมีความสนุกกับการทำงานร่วมกันกับ Web
                    Designer และ Backend Developer
                    เพื่อทำให้โครงร่างของเว็บแอปพลิเคชันที่ได้ทำการออกแบบไว้มีชีวิตขึ้นมา
                  </p>
                  <p className="indent-12">
                    หากคุณกำลังมองหา Frontend Developer
                    โดยเฉพาะที่สามารถทำให้แนวคิดของคุณเป็นจริงได้ในขณะที่รับประกันประสบการณ์การใช้งานที่น่าพึงพอใจ
                    ผมยินดีที่จะรับฟังความคิดเห็น
                    เพื่อสร้างเว็บแอปพลิเคชันยุคใหม่ที่จะสร้างแรงบันดาลใจและดึงดูดผู้ใช้
                  </p>
                </>
              )}
            </div>
           
          </div>
        </div>
      )}
    </>
  );
}

export default About;

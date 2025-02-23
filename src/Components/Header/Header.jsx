import React, { useEffect, useState } from "react";
import imglogo from "../../Images/logo2.svg";
import GridDistortion from "../seccomp/GridDistortion";
import Globus from "../Globus/Globus";
import "../../App.css";
import AnimatedContent from "../seccomp/AnimatedContent";
import TextPressure from "../seccomp/TextPressure";
import { useTranslation } from "react-i18next";
import Languages from "../Languages/Languages.jsx";
const Header = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t("description");
  const [isScrolled, setisScrolled] = useState(false);
  useEffect(() => {
    const handeScroll = () => {
      if (window.scrollY > 80) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handeScroll);
  }, []);

  return (
    <div>
      <div className="relative h-[850px]   w-full duration-500 hover:scale-105 z-10">
        <GridDistortion
          imageSrc="https://www.muchbetteradventures.com/magazine/content/images/size/w1600/2024/08/Alti-Hut-with-the-view-of-Mount-Kazbeg-in-Caucasus--Georgia.-There-slopes-are-barren-and-stony-below-the-snow-capped-peak-and-the-Gergeti-Glacier..jpg"
          grid={10}
          mouse={0.2}
          strength={0.15}
          relaxation={0.9}
          className=" object-cover transition-transform  "
        />

        <div className="top-shadow absolute left-0 top-0 w-full h-[180px] bg-gradient-to-b from-black to-transparent"></div>
        <div className="bottom-shadow absolute left-0 -bottom-1 w-full h-[180px] bg-gradient-to-t from-black to-transparent "></div>
      </div>

      <img
        src={imglogo}
        alt=""
        className="w-[180px] relative  -top-[52em] z-10 transition-transform "
      />
      <div className="relative -top-[60em] left-[5em] ssm:left-[10em]  sm:left-[12em] mmd:left-[16em] md:left-[18em] lg:left-[20em] xl:left-[32em] xxxl:left-[46em] z-10">
        <Languages />
      </div>
      <div className="  font-extrabold flex flex-col gap-5 relative   -top-[30em] content-center text-center ">
        <div className="z-20">
          <TextPressure
            text={t("Title")}
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="transparent"
            strokeColor="#ff0000"
            minFontSize={36}
            className="    tracking-[20px] bg-clip-text bg-gradient-to-r from-orange-500 to-sky-200"
          />
        </div>
        <div className="z-20">
          <Globus />
          {isScrolled && (
            <div className="flex flex-row justify-between w-full p-10 relative -top-[50em] content-center items-center text-center ">
              <AnimatedContent
                distance={350}
                reverse={false}
                config={{ tension: 40, friction: 30 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="flex flex-col gap-2">
                  <h1 className=" p-2 text-2xl smm:text-4xl md:text-5xl bg-gradient-to-r from-orange-400  to-sky-100 bg-clip-text text-transparent">
                    {t("PeopleTTL")}
                  </h1>
                  <p className=" w-[250px] lg:w-[400px] xl:w-[500px] text-center text-sm md:text-md bg-gradient-to-r from-orange-300 via-white to-sky-100 bg-clip-text text-transparent ">
                    {line1}
                  </p>
                </div>
              </AnimatedContent>
              <AnimatedContent
                distance={350}
                reverse={false}
                config={{ tension: 40, friction: 30 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="flex flex-col gap-2 relative -left-[10em] ssm:-left-[2em] smm:left-0 top-[30em] xl:top-0  ">
                  <h1 className=" p-2 text-2xl smm:text-4xl md:text-5xl bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent ">
                    {t("HistoryTTL")}
                  </h1>
                  <p className=" w-[200px]  lg:w-[400px] xl:w-[500px] text-[12px] smm:text-sm md:text-md bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent">
                    {line2}{" "}
                  </p>
                </div>
              </AnimatedContent>
            </div>
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Header;

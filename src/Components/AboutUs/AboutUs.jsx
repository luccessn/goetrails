/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Aboutus() {
  const { t } = useTranslation();
  const { titleus, group1, group2, group3, group4 } = t("aboutus");
  const goInsta = () => {
    window.open(
      "https://www.instagram.com/geo_trails_/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const features = [
    {
      title: group1.pargh,
      description: group1.descr,
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: group2.pargh,
      description: group2.descr,
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: group3.pargh,
      description: group3.descr,
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: group4.pargh,
      description: " 📞 +995 568 134 134 ",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      button: (
        <div className="group relative inline-block">
          <button className="focus:outline-none">
            <svg
              viewBox="0 0 16 16"
              class="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
              fill="currentColor"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              onClick={goInsta}
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
            </svg>
          </button>
          <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
            Instagram
          </span>
        </div>
      ), // Add button here
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center text-white font-semibold tracking-[18px] dark:text-white">
          {titleus}
        </h4>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1  lg:grid-cols-6 mt-12 xl:border text-white rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureDescription> {feature.button} </FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white  text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={
        ("text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal ",
        "text-left max-w-sm mx-0 md:text-sm my-2")
      }
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto  dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1afmiJiUGUzk-a6L4R0Ak_1X_n8IcPow&ehbc=2E312F"
            width="640"
            height="480"
            className=" w-full aspect-square object-cover object-left-top rounded-sm"
          ></iframe>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t  dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b  dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
        <div className="sketchfab-embed-wrapper h-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200">
          <iframe
            title="Toyota Sienna 2021"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            // width=" 400px ssm:640px"
            height="480"
            className=" w-[450px] ssm:w-[640px]"
            src="https://sketchfab.com/models/9ae4013abbe1460aafcc43a8de878729/embed?autostart=1&transparent=1"
          />
          <p className="text-sm font-normal text-gray-600 m-1">
            <a
              href="https://sketchfab.com/3d-models/toyota-sienna-2021-9ae4013abbe1460aafcc43a8de878729?utm_medium=embed&utm_campaign=share-popup&utm_content=9ae4013abbe1460aafcc43a8de878729"
              target="_blank"
              rel="nofollow"
              className="font-bold text-blue-500"
            >
              Toyota Sienna 2021
            </a>
            {" by "}
            <a
              href="https://sketchfab.com/SQUIR3D?utm_medium=embed&utm_campaign=share-popup&utm_content=9ae4013abbe1460aafcc43a8de878729"
              target="_blank"
              rel="nofollow"
              className="font-bold text-blue-500"
            >
              SQUIR3D
            </a>
            {" on "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9ae4013abbe1460aafcc43a8de878729"
              target="_blank"
              rel="nofollow"
              className="font-bold text-blue-500"
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://cdn.georgiantravelguide.com/storage/thumbnails/mestia-in-winter-2.jpg",
    "https://ticket.vanillasky.ge/sites/default/files/inline-images/digital2.png",
    "https://api.visitbatumi.com/media/image/ec568ecc98e84a9db0c9d34c051c2191.jpg",
    "https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2019/09/11094949/iStock-1003994074.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Gudauri_Georgia_Panorama_P.Liparteliani.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r  dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l  dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [41.697102, 44.773674], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    </>
  );
};

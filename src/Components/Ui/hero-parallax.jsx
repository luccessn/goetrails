"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../Images/geomap.svg";
import React from "react";

// Import Swiper styles
import "swiper/css";
import { useTranslation } from "react-i18next";
export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(5, 12);
  const thirdRow = products.slice(12, 18);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <>
      <div
        ref={ref}
        className="h-[300vh] py-40 overflow-hidden -top-[25em] antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          <Swiper
            spaceBetween={130}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 200,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <motion.div className="flex flex-row-reverse space-x-reverse   space-x-20 mb-20">
              {firstRow.map((product) => (
                <SwiperSlide key={product.title}>
                  <ProductCard
                    product={product}
                    translate={translateXReverse}
                    key={product.title}
                  />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
          <Swiper
            spaceBetween={130}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 200,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <motion.div className="flex flex-row  mb-20 space-x-20  ">
              {secondRow.map((product) => (
                <SwiperSlide key={product.title}>
                  <ProductCard
                    product={product}
                    translate={translateX}
                    key={product.title}
                  />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
          <Swiper
            spaceBetween={130}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 200,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 ">
              {thirdRow.map((product) => (
                <SwiperSlide key={product.title}>
                  <ProductCard
                    product={product}
                    translate={translateXReverse}
                    key={product.title}
                  />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
      </div>{" "}
    </>
  );
};

export const Header = () => {
  const { t } = useTranslation();
  const { middleLine } = t("description");
  return (
    <>
      <div className="flex flex-col md:flex-row  md:gap-32">
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0  ">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Geo Trails
            <ion-icon
              name="trail-sign"
              className=" text-orange-500 text-8xl "
            ></ion-icon>
          </h1>

          <p className="max-w-2xl text-base md:text-xl mt-8 text-white">
            {middleLine}
          </p>
        </div>
        <img
          src={img2}
          alt=""
          className="w-[600px] md:w-[400px] xl:w-[700px] "
        />
      </div>
    </>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0 pt-6 transition-transform "
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

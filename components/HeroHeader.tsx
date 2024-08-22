"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import { motion, useInView, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CHILD_VARIANTS_SCALE = {
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 1, scale: 1 },
};

const heo_image = [
  "/assets/hero/DSC05715-109.webp",
  "/assets/hero/DSC05745-134.webp",
  "/assets/hero/DSC05771-162.webp",
  "/assets/hero/DSC05825-255.webp",
  "/assets/hero/DSC05866-287.webp",
  "/assets/hero/DSCF5518-142.webp",
  "/assets/hero/DSCF5612-239.webp",
  "/assets/hero/DSCF5570-219.webp",
];

const HeroHeader: FC<Props> = (): JSX.Element => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, ref]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        variants={CHILD_VARIANTS_SCALE}
        className=" w-full h-full "
      >
        <div className="w-full h-1/2 bottom-0  absolute z-[10] bg-gradient-to-t from-[#0f0f10]/35 " />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          effect="fade"
          centeredSlides={true}
          loop={true}
          speed={1500}
          pagination={{
            clickable: false,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="h-full w-full "
        >
          {heo_image.map((item, index) => (
            <SwiperSlide key={index} className="h-full w-full relative">
              <Image
                src={item}
                alt={`background${index}`}
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

      <div className="absolute flex-1 inset-0 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-7xl max-w-screen-md font-medium text-center text-white  drop-shadow-md uppercas"
        >
          ยินดีต้อนรับสู่ไร่จันทร์งาม
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/85 mt-2 md:mt-4 text-center"
        >
          ไร่ออร์แกนิกคุณภาพเยี่ยม ส่งตรงถึงร้านอาหารระดับมิชลินสตาร์
        </motion.p>
      </div>
    </>
  );
};

export default HeroHeader;

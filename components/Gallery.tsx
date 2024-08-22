"use client";
import React, { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Fancybox from "./FancyboxWrap";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const images = [
  {
    src: "/assets/gallery/DSC05770-161.webp",
    thumb: "/assets/gallery/DSC05770-161-thumb.webp",

    caption: "DSC05770-161",
    alt: "06",
  },
  {
    src: "/assets/gallery/DSC05715-109.webp",
    thumb: "/assets/gallery/DSC05715-109-thumb.webp",

    caption: "DSC05715-109",
    alt: "DSC05715-109",
  },
  {
    src: "/assets/gallery/DSC05727-125.webp",
    thumb: "/assets/gallery/DSC05727-125-thumb.webp",

    caption: "DSC05727-125",
    alt: "DSC05727-125",
  },
  {
    src: "/assets/gallery/DSC05741-133.webp",
    thumb: "/assets/gallery/DSC05741-133-thumb.webp",

    caption: "DSC05741-133",
    alt: "DSC05741-133",
  },
  {
    src: "/assets/gallery/DSC05720-115.webp",
    thumb: "/assets/gallery/DSC05720-115-thumb.webp",

    caption: "DSC05720-115",
    alt: "DSC05720-115",
  },
  {
    src: "/assets/gallery/DSC05883-320.webp",
    thumb: "/assets/gallery/DSC05883-320-thumb.webp",

    caption: "DSC05883-320",
    alt: "DSC05883-320",
  },
  {
    src: "/assets/gallery/DSCF5526-156.webp",
    thumb: "/assets/gallery/DSCF5526-156-thumb.webp",

    caption: "DSCF5526-156",
    alt: "DSCF5526-156",
  },
  {
    src: "/assets/gallery/DSC05771-162.webp",
    thumb: "/assets/gallery/DSC05771-162-thumb.webp",

    caption: "DSC05771-162",
    alt: "DSC05771-162",
  },
  {
    src: "/assets/gallery/DSC05807-207.webp",
    thumb: "/assets/gallery/DSC05807-207-thumb.webp",

    caption: "DSC05807-207",
    alt: "DSC05807-207",
  },
  {
    src: "/assets/gallery/DSC05835-262.webp",
    thumb: "/assets/gallery/DSC05835-262-thumb.webp",

    caption: "DSC05835-262",
    alt: "DSC05835-262",
  },
  {
    src: "/assets/gallery/DSCF5606-234.webp",
    thumb: "/assets/gallery/DSCF5606-234-thumb.webp",

    caption: "DSCF5606-234",
    alt: "DSCF5606-234",
  },
  {
    src: "/assets/gallery/DSCF5612-239.webp",
    thumb: "/assets/gallery/DSCF5612-239-thumb.webp",

    caption: "DSCF5612-239",
    alt: "DSCF5612-239",
  },
  {
    src: "/assets/gallery/DSC05868-288.webp",
    thumb: "/assets/gallery/DSC05868-288-thumb.webp",

    caption: "DSC05868-288",
    alt: "DSC05868-288",
  },
  {
    src: "/assets/gallery/DSCF5541-188.webp",
    thumb: "/assets/gallery/DSCF5541-188-thumb.webp",

    caption: "DSCF5541-188",
    alt: "DSCF5541-188",
  },
  {
    src: "/assets/gallery/DSCF5637-285.webp",
    thumb: "/assets/gallery/DSCF5637-285-thumb.webp",

    caption: "DSCF5637-285",
    alt: "DSCF5637-285",
  },
  {
    src: "/assets/gallery/DSCF5560-216.webp",
    thumb: "/assets/gallery/DSCF5560-216-thumb.webp",

    caption: "DSCF5560-216",
    alt: "DSCF5560-216",
  },
];

const Gallery: FC<Props> = (): JSX.Element => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 2,
    500: 2,
  };
  return (
    <>
      <div className="min-h-[500px] h-fit w-full bg-[#1f3026]  flex flex-col  items-center py-20 md:py-32  ">
        <div className="max-w-[1400px] h-full w-full px-6 md:px-10  flex flex-col items-center ">
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid relative -translate-x-2 mt-7 md:mt-20"
              columnClassName="masonry-grid_column pl-2 md:pl-4"
            >
              {images.map((item, index) => (
                <a
                  key={index}
                  aria-label={item.alt}
                  data-fancybox={item.caption}
                  href={item.src}
                  className="relative masonry-grid_item loading bussiness_card "
                >
                  <div className="gallery-image mb-2 md:mb-4 image rounded-lg overflow-hidden">
                    <Image
                      alt={item.alt}
                      src={item.thumb}
                      title={item.caption || ""}
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      sizes="100vw"
                      width={0}
                      height={0}
                      quality={75}
                      loading="lazy"
                      className="w-full h-full "
                    />
                  </div>
                </a>
              ))}
            </Masonry>
          </Fancybox>
        </div>
      </div>
    </>
  );
};

export default Gallery;

"use client";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const product = [
  {
    id: 1,
    label: "เมล่อนสีทอง",
    detail:
      "เมล่อนคุณภาพเกรดพรีเมี่ยม สายพันธ์นำเข้าจากญิ่ปุ่น รสชาดสุดจะบรรยาย",
    src: "/assets/product/product-0.webp",
    alt: "",
  },
  {
    id: 4,
    label: "",
    detail: "",
    src: "/assets/product/product-3.webp",
    alt: "",
  },
  {
    id: 2,
    label: "",
    detail: "",
    src: "/assets/product/product-1.webp",
    alt: "",
  },
  {
    id: 3,
    label: "",
    detail: "",
    src: "/assets/product/product-2.webp",
    alt: "",
  },

  {
    id: 5,
    label: "",
    detail: "",
    src: "/assets/product/product-4.webp",
    alt: "",
  },
];

const Product: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="min-h-[500px] bg-white h-fit w-full  backdrop-blur-sm flex flex-col justify-center  items-center ">
        <div className="max-w-[1400px] h-full w-full px-6 md:px-10  flex flex-col items-center py-16 md:py-32">
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            <h1 className="text-[#1f3026] text-2xl md:text-4xl font-medium">
              ผลิตภัณฑ์ของเรา
            </h1>
            <p className="text-[#1f3026] text-base md:text-lg opacity-85 ">
              จากดินสู่จาน ด้วยความใส่ใจทุกขั้นตอน
              เพื่อมอบผลผลิตที่ดีที่สุดให้กับคุณและครอบครัว
            </p>

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5 mt-4">
              {product.map((item, index) => (
                <div
                  key={index}
                  className="w-full aspect-square relative rounded-md overflow-hidden group shadow-md hover:cursor-pointer loading bussiness_card"
                >
                  <div className="hidden absolute w-full translate-y-full group-hover:translate-y-0 h-1/2 bg-gradient-to-t from-[#1f3026]/50 z-10 transition-all duration-200 bottom-0 p-6 xl:flex flex-col justify-end ">
                    <h1 className="text-white text-xl font-medium">
                      {item.label}
                    </h1>
                    <p className="text-white/75 ">{item.detail}</p>
                  </div>
                  <div className="image">
                    <Image
                      src={item.src}
                      alt={`product ${item.label}`}
                      sizes="100vw"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover object-center "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

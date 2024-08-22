"use client";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const AboutComponent: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="min-h-[75vh] bg-[url('/assets/DSCF5475-101.webp')] bg-fixed bg-cover bg-no-repeat bg-top h-fit w-full  backdrop-blur-sm flex flex-col justify-center  items-center">
        <div className="max-w-[1400px] h-full w-full px-6 md:px-10  flex flex-col items-center py-16 md:py-32">
          <div className="max-w-screen-md z-10">
            <h2 className="text-lg md:text-2xl text-white text-center drop-shadow-md">
              <span className="font-semibold pr-3 italic text-2xl  md:text-4xl ">
                ไร่จันทร์งาม
              </span>
              เริ่มจากความฝันที่ต้องการสร้างผลิตภัณฑ์เกษตรคุณภาพสูง
              เรามุ่งมั่นในการผลิตอาหารที่ปลอดภัย มีคุณค่าทางโภชนาการ
              และรสชาติยอดเยี่ยม ด้วยการดูแลอย่างพิถีพิถันในทุกขั้นตอน
            </h2>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"></div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;

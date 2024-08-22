"use client";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const AboutSecond: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="  w-full bg-white  backdrop-blur-sm flex flex-col justify-center  items-center pt-16 md:!py-0">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-7 xl:gap-4 ">
          <div className="w-full h-full relative row-start-2 md:row-start-1 ">
            <Image
              src={"/assets/DSC05761-150.png"}
              alt=""
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-full object-cover !object-center"
            />
          </div>

          <div className="w-full h-full flex items-center justify-center ">
            <div className="max-w-screen-sm flex flex-col gap-1 md:gap-2  p-6 md:p-10">
              <h1 className="text-[#1f3026] text-xl md:text-3xl font-medium">
                ที่ไร่จันทร์งาม
                เราเชื่อว่าการทำเกษตรที่ดีต้องไม่เพียงแต่ให้ผลผลิตที่มีคุณภาพ
                แต่ยังต้องรักษาสมดุลของธรรมชาติและสร้างประโยชน์แก่ชุมชนด้วย
                นี่คือแนวทางการดำเนินงานของเรา
              </h1>

              <ul className="list-disc list-outside pl-4 mt-2 md:mt-4 flex flex-col gap-2 text-base md:text-lg">
                <li className="text-[#1f3026]/75">
                  <span className="font-medium text-[#1f3026] ">
                    การอนุรักษ์ดินและน้ำ:
                  </span>{" "}
                  ใช้เทคนิคการหมุนเวียนพืช เพื่อรักษาความอุดมสมบูรณ์ของดิน
                  การทำปุ๋ยหมักจากเศษวัสดุในฟาร์ม ลดการใช้สารเคมี
                </li>

                <li className="text-[#1f3026]/75">
                  <span className="font-medium text-[#1f3026] ">
                    การใช้พลังงานหมุนเวียน:
                  </span>{" "}
                  ติดตั้งแผงโซลาร์เซลล์เพื่อผลิตไฟฟ้าใช้ในฟาร์ม
                  ลดการปล่อยก๊าซเรือนกระจก
                </li>

                <li className="text-[#1f3026]/75">
                  <span className="font-medium text-[#1f3026] ">
                    การส่งเสริมความหลากหลายทางชีวภาพ:
                  </span>{" "}
                  ปลูกพืชหลากหลายชนิด สร้างระบบนิเวศที่สมดุล
                  ไม่ใช้สารเคมีกำจัดศัตรูพืช เพื่อปกป้องสิ่งมีชีวิตในระบบนิเวศ
                </li>

                <li className="text-[#1f3026]/75">
                  <span className="font-medium text-[#1f3026] ">
                    การสนับสนุนชุมชน:
                  </span>{" "}
                  จ้างงานคนในท้องถิ่น สร้างรายได้และความเป็นอยู่ที่ดีให้ชุมชน
                </li>

                <li className="text-[#1f3026]/75">
                  <span className="font-medium text-[#1f3026] ">
                    การจัดการของเสียอย่างมีประสิทธิภาพ:
                  </span>{" "}
                  นำเศษผักผลไม้มาทำปุ๋ยหมักและน้ำหมักชีวภาพ
                  ใช้บรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมและย่อยสลายได้
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSecond;

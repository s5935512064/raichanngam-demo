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
      "เมล่อนพรีเมียมสายพันธุ์แท้จากญี่ปุ่น หอมหวานละมุน เนื้อแน่นฉ่ำ สัมผัสได้ถึงความพิถีพิถันในทุกผล ให้คุณได้ลิ้มรสความอร่อยระดับพรีเมียมที่หาที่เปรียบไม่ได้",
    src: "/assets/product/product-0.webp",
    alt: "",
  },
  {
    id: 6,
    label: "มะยงชิด",
    detail:
      "ผลใหญ่เนื้อแน่น รสหวานกำลังดี มีกลิ่นหอมเฉพาะตัว เนื้อล่อนง่าย เคี้ยวนุ่ม เก็บสดจากต้น ส่งตรงถึงมือคุณ",
    src: "/assets/product/raknam-2-1024x683.webp",
    alt: "",
  },
  {
    id: 4,
    label: "มะเขือเทศเชอร์รี่",
    detail:
      "หวานฉ่ำ สดจากต้น มะเขือเทศเชอร์รี่ออร์แกนิคที่คัดสรรพิเศษ อุดมด้วยไลโคปีน วิตามินซีสูง ทานเล่น ทำสลัด หรือปรุงอาหาร ก็อร่อยเข้ากันได้ดีทุกเมนู",
    src: "/assets/product/product-3.webp",
    alt: "",
  },
  {
    id: 3,
    label: "แคนตาลูปพรีเมียม",
    detail:
      "แคนตาลูปเนื้อส้มหวานฉ่ำ หอมกลิ่นเฉพาะตัว เนื้อแน่นนุ่มละมุนลิ้น ผ่านการคัดสรรคุณภาพมาอย่างพิถีพิถัน อุดมด้วยวิตามินและแร่ธาตุ ทานง่ายได้ประโยชน์",
    src: "/assets/product/product-2.webp",
    alt: "",
  },
  {
    id: 2,
    label: "กรีนโอ๊คออร์แกนิค",
    detail:
      "ผักสลัดกรีนโอ๊คสดกรอบ ปลูกด้วยระบบไฮโดรโปนิกส์ปลอดสารเคมี 100% ใบอ่อนนุ่ม รสชาติหวานกรอบ เพิ่มความสดชื่นให้ทุกมื้ออาหารของคุณ",
    src: "/assets/product/product-1.webp",
    alt: "",
  },

  {
    id: 5,
    label: "ส้มโอขาวอัมพวา",
    detail:
      "ส้มโอขาวลูกใหญ่จากสวนอัมพวา เนื้อหวานฉ่ำ ไม่มีรสขม กลิ่นหอมเฉพาะตัว เลือกเก็บในช่วงเวลาที่สุกกำลังพอดี ส่งตรงจากสวนถึงมือคุณ",
    src: "/assets/product/product-4.webp",
    alt: "",
  },
  {
    id: 7,
    label: "มะม่วงอกร่องเขียว",
    detail:
      "มะม่วงอกร่องเขียวคัดพิเศษ เนื้อเหลืองทอง เนียนนุ่ม หวานหอมกำลังดี ส่งตรงจากสวน",
    src: "/assets/product/12252.webp",
    alt: "",
  },
  {
    id: 8,
    label: "ฝรั่งกิมจู",
    detail: "หวาน กรอบ อร่อย เนื้อแน่น อุดมด้วยวิตามินซีสูง",
    src: "/assets/product/french-2161489_1920.webp",
    alt: "",
  },
  {
    id: 9,
    label: "ข้าวโพดหวานฮอกไกโด",
    detail:
      "เมล็ดเรียงสวย หอมมัน อุดมด้วยวิตามินและแร่ธาตุ เก็บสดใหม่ รสชาติหวานตามธรรมชาติ",
    src: "/assets/product/file_502_2.webp",
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
              ผลผลิตที่ได้มาตรฐานถึงขั้นส่งจำหน่ายร้านอาหารดาวมิชลิน
            </h1>
            <p className="text-[#1f3026] text-base md:text-lg opacity-85 ">
              หนึ่งในความภาคภูมิใจของไร่จันทน์งาม คือ ผลผลิตที่ได้คุณภาพระดับสูง
              ซึ่งส่งตรงถึงร้านอาหารมิชลินชื่อดังอย่าง{" "}
              <a
                href="https://sanehjaan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all duration-200 hover:underline"
              >
                ร้านเสน่ห์จันทน์ (Saneh Jaan)
              </a>{" "}
              ที่ให้ความสำคัญกับวัตถุดิบชั้นเลิศ
              ผลไม้ที่นี่ไม่เพียงเป็นของฝากที่ถูกใจผู้รับ
              แต่ยังแสดงถึงความทุ่มเทและความรักที่ใส่ลงไปในทุกขั้นตอนการปลูกและการบำรุงรักษา
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
                  <div className="w-full h-full image">
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

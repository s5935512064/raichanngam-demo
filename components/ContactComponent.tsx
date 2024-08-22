"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const ContactComponent: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="min-h-[500px] h-fit w-full bg-white  flex flex-col  items-center  ">
        <div className="max-w-[1400px] h-full w-full px-6 md:px-10  flex flex-col gap-7 py-16 md:py-32 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 items-start">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-2xl md:text-4xl  font-normal uppercase text-[#1f3026]">
                สัมผัสประสบการณ์พิเศษที่
                <span className="font-semibold px-2">ไร่จันทร์งาม</span>
              </h1>

              <h2 className="text-[#1f3026] text-base md:text-lg opacity-75 ">
                เราอยากเชิญคุณมาร่วมเป็นส่วนหนึ่งของประสบการณ์สุดพิเศษที่ไร่จันทร์งาม
                บรรยากาศสวนเกษตรอินทรีย์ที่รายล้อมไปด้วยธรรมชาติ
                สูดอากาศบริสุทธิ์ และสัมผัสถึงความรักที่เรามอบให้กับทุกผลผลิต
                อย่าลืมแวะมาหาเรา
                เพื่อนำความสดชื่นและคุณภาพของไร่จันทร์งามกลับไปสู่บ้านของคุณ
                ด้วยผลิตภัณฑ์ออร์แกนิคคุณภาพเยี่ยมที่คัดสรรมาเพื่อคุณโดยเฉพาะ
              </h2>

              <div className="flex  gap-2 items-center ">
                <p className="text-sm md:text-base text-[#1f3026] font-medium ">
                  ช่องทางติดตามข่าวสารเพิ่มเติม
                </p>

                <div className="flex items-center gap-2 mt-1 ">
                  <Link
                    legacyBehavior
                    href="https://www.facebook.com/profile.php?id=61562876783782&mibextid=ZbWKwL"
                    className=""
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook_osp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32.84 32.84"
                        className="w-10 h-10 cursor-pointer text-[#1f3026] hover:bg-[#1f3026] hover:text-white rounded-full duration-200 transition-all hover:scale-110"
                      >
                        <circle
                          id="Ellipse_9"
                          data-name="Ellipse 9"
                          cx="15.67"
                          cy="15.67"
                          r="15.67"
                          transform="translate(0.75 0.75)"
                          fill="none"
                          stroke="#1f3026"
                          strokeWidth="1.5"
                        />
                        <path
                          id="Path_548020"
                          data-name="Path 548020"
                          d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                          transform="translate(-71.834 -38.578)"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 ">
                <div className="w-full h-fit md:h-48 border border-tertiary rounded-xl group overflow-hidden ">
                  <div className="flex flex-row md:flex-col items-center md:justify-center gap-4 p-5  group-hover:bg-tertiary group-hover:text-white group-hover:bg-[#1f3026] w-full h-full transition-all duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-16 md:w-20 h-16 md:h-20 shrink-0 group-hover:scale-110 animate-bounce99 "
                    >
                      <g fill="currentColor">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="d"
                            dur="0.4s"
                            keyTimes="0;0.7;1"
                            values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
                          />
                        </path>
                        <circle cx="12" cy="9" r="2.5" fillOpacity="0">
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.5s"
                            dur="0.4s"
                            values="0;1"
                          />
                        </circle>
                      </g>
                    </svg>

                    <div>
                      <p className="font-medium text-center flex-1   ">
                        ไร่จันทร์งาม
                      </p>
                      <p className="text-sm text-center opacity-85">
                        {" "}
                        73/5 ม.12 ถ.มิตรภาพ ต.ลาดบัวขาว อ.สีคิ้ว จ.นครราชสีมา
                        30340
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-fit md:h-48 border border-tertiary rounded-xl group overflow-hidden">
                  <a
                    href="tel:+6643615234"
                    className="flex flex-row md:flex-col items-center md:justify-center gap-4 p-5 group-hover:bg-tertiary group-hover:text-white group-hover:bg-[#1f3026] w-full h-full transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-16 md:w-20 h-16 md:h-20 shrink-0 group-hover:scale-110 transition-all "
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeDasharray="64"
                          strokeDashoffset="64"
                          d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="64;0"
                          />
                          <animateTransform
                            attributeName="transform"
                            begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s"
                            dur="0.5s"
                            type="rotate"
                            values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                          />
                        </path>
                        <path
                          strokeDasharray="4"
                          strokeDashoffset="4"
                          d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
                          opacity="0"
                        >
                          <set
                            id="lineMdPhoneCallLoop0"
                            attributeName="opacity"
                            begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
                            to="1"
                          />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
                            dur="0.2s"
                            values="4;8"
                          />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s"
                            dur="0.3s"
                            values="0;4"
                          />
                          <set
                            attributeName="opacity"
                            begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s"
                            to="0"
                          />
                        </path>
                        <path
                          strokeDasharray="10"
                          strokeDashoffset="10"
                          d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
                          opacity="0"
                        >
                          <set
                            attributeName="opacity"
                            begin="1s;lineMdPhoneCallLoop0.begin+3s"
                            to="1"
                          />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1s;lineMdPhoneCallLoop0.begin+3s"
                            dur="0.2s"
                            values="10;20"
                          />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s"
                            dur="0.3s"
                            values="0;10"
                          />
                          <set
                            attributeName="opacity"
                            begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s"
                            to="0"
                          />
                        </path>
                      </g>
                    </svg>

                    <p className="text-sm text-center uppercase flex-1  font-medium ">
                      084 361 5234
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[400px] md:h-[500px] ">
          <iframe
            title="raichanngam map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7714.056768703516!2d101.6142454!3d14.823665000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e9c022288b283%3A0x9f1ba4f3bdc0564b!2z4LmE4Lij4LmI4LiI4Lix4LiZ4LiX4LiZ4LmM4LiH4Liy4LihIOC4muC4o-C4tOC4qeC4seC4lyDguJ7guKPguLXguKHguLLguIHguKPguLXguJkg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sen!2sth!4v1724314789735!5m2!1sen!2sth"
            width={`${100}%`}
            height={`${100}%`}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;

"use client";

import React, { FC, useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import Link2 from "next/link";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import { motion, useScroll, useSpring } from "framer-motion";

interface Props {
  inView: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const menu = [
  { label: "หน้าหลัก", underline: "home" },
  {
    label: "ผลิตภัณฑ์ของเรา",
    underline: "product",
  },
  {
    label: "เกี่ยวกับไร่",
    underline: "about",
  },

  {
    label: "ทำไมต้องเรา",
    underline: "why",
  },

  {
    label: "แกลอรี่",
    underline: "gallery",
  },

  {
    label: "ติดต่อเรา",
    underline: "contactus",
  },
];

const Navbar: FC<Props> = ({ inView }): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [navbarOffset, setNavbarOffset] = useState(false);
  const [navbarOffset2, setNavbarOffset2] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/");

  function closeModal() {
    setOpen(false);
  }

  function toggleNavbar() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      if (prevScrollpos == 0) setNavbarOffset(false);
      else setNavbarOffset(true);
    };
  }, []);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos >= currentScrollPos) {
        setNavbarOffset2(true);
      } else {
        setNavbarOffset2(false);
      }

      if (window.pageYOffset >= 20) {
        setNavbarOffset(true);
      } else {
        setNavbarOffset(false);
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <>
      <div className="fixed bottom-0 w-full h-2 !z-[99]">
        <motion.div
          className="inset-0 fixed h-[5px] bg-secondary origin-[0%]"
          style={{ scaleX }}
        />
      </div>

      <header
        id="navbar"
        className={classNames(
          navbarOffset
            ? "bg-[#1f3026] backdrop-blur shadow bg-opacity-70 text-white  h-fit  p-3"
            : "bg-gradient-to-b from-[#1f3026]/30 h-fit p-3",
          navbarOffset2 ? "top-0" : "top-0",
          "fixed inset-0 w-full !z-50 flex items-center"
        )}
      >
        <div className="absolute lg:hidden left-3 lg:left-7 w-fit h-full  flex gap-2 items-center ">
          <Hamburger
            label="menu"
            rounded
            color={navbarOffset ? "#fff" : "#fff"}
            size={20}
            toggled={isOpen}
            toggle={toggleNavbar}
          />
        </div>
        <div className="max-w-[1440px] relative mx-auto flex justify-center lg:justify-between items-center gap-4 w-full my-5 ">
          <Link2
            href={"/"}
            className={classNames(
              navbarOffset ? "w-32 md:w-40" : "w-32 md:w-40",
              "flex items-center justify-center  absolute mt-2 xl:mt-0 "
            )}
          >
            <Image
              src={navbarOffset ? "/assets/logo-w.webp" : "/assets/logo-w.webp"}
              alt="logo"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full"
            />
          </Link2>
          {/* Left Menu Items */}
          <ul className="hidden lg:flex space-x-7 justify-center flex-1  ">
            {menu
              .filter((p) => p.label != "ติดต่อเรา")
              .map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    href="#"
                    activeClass="active"
                    to={item.underline}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                    className={classNames(
                      item.underline == inView
                        ? "effect-underline2"
                        : "effect-underline text-opacity-70",
                      navbarOffset
                        ? "text-white hover:text-white after:text-white"
                        : "text-white hover:text-white after:text-white",
                      " transition duration-300  text-base md:text-lg uppercase hover:text-opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          <ul className="hidden lg:flex space-x-7 justify-evenly absolute right-0 ">
            {menu
              .filter((p) => p.label == "ติดต่อเรา")
              .map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    href="#"
                    activeClass="active"
                    to={item.underline}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                    className={classNames(
                      item.underline == inView
                        ? "bg-white !text-[#1f3026]"
                        : "",
                      navbarOffset
                        ? "text-white border border-white hover:bg-white hover:text-[#1f3026]"
                        : "text-white border border-white hover:bg-white hover:text-[#1f3026]",
                      " transition duration-300 font-medium uppercase hover:text-opacity-100 px-4 py-2 rounded-full text-sm md:text-base flex items-center gap-1"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </header>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-0 !overflow-hidden ">
              <div className="flex min-h-full items-center text-center ">
                <Dialog.Panel className="bg-[#1f3026] w-full max-w-[350px] h-screen  transform overflow-y-scroll  shadow-xl transition-all relative">
                  <div className="p-4  py-6 flex flex-col absolute gap-4 z-10 w-full">
                    <div className="absolute right-4">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-secondary/40   flex items-center justify-center text-white "
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        <span className="sr-only">close</span>
                      </button>
                    </div>

                    <div className="w-36 relative ml-3">
                      <Image
                        src={"/assets/logo-w.webp"}
                        alt="logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        className="w-full h-full"
                      />
                    </div>

                    <div className=" w-full flex flex-col flex-1 ">
                      {menu.map((item, index) => (
                        <Link
                          key={index}
                          href="#"
                          activeClass="active"
                          to={item.underline}
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={300}
                          onClick={closeModal}
                          className={classNames(
                            inView == item.underline
                              ? "bg-[#1f3026] !text-white font-semibold"
                              : "opacity-75",
                            "group text-white flex w-full items-center  px-4 py-4 border-white/25 text-sm duration-300  uppercase border-b"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;

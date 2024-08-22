"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrap from "@/components/Wrap";
import HeroHeader from "@/components/HeroHeader";
import AboutComponent from "@/components/AboutComponent";
import ContactComponent from "@/components/ContactComponent";
import AboutSecond from "@/components/AboutSecond";
import Product from "@/components/Product";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  const [divInview, setDivInview] = useState("home");

  const onInView = (input: string) => {
    setDivInview(input);
  };

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <>
      <Navbar inView={divInview} />

      <main className="flex flex-col relative bg-neutral-200 flex-1 ">
        <Wrap name="home" onView={(input: string) => onInView(input)}>
          <div className="relative h-[65vh] md:h-screen flex flex-col items-center !w-full overflow-hidden ">
            <HeroHeader />
          </div>
        </Wrap>

        <Wrap name="product" onView={(input: string) => onInView(input)}>
          <Product />
        </Wrap>

        <Wrap name="about" onView={(input: string) => onInView(input)}>
          <AboutComponent />
        </Wrap>

        <Wrap name="why" onView={(input: string) => onInView(input)}>
          <AboutSecond />
        </Wrap>

        <Wrap name="gallery" onView={(input: string) => onInView(input)}>
          <Gallery />
        </Wrap>

        <Wrap name="contactus" onView={(input: string) => onInView(input)}>
          <ContactComponent />
        </Wrap>
      </main>
      <Footer />
    </>
  );
}

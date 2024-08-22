"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  name: string;
  onView: (toggle: string) => void;
}

const Wrap: FC<Props> = ({ children, name, onView }): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  useEffect(() => {
    // console.log("Element is in view: ", name, isInView);
    if (isInView) {
      onView(name);
    }
  }, [isInView, name, onView]);

  return (
    <>
      <section
        id={name}
        ref={ref}
        className="flex relative w-full h-full justify-center items-center "
      >
        {children}
      </section>
    </>
  );
};

export default Wrap;

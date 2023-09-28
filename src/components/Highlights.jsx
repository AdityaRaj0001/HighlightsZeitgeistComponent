import React from "react";
import reelup from "/images/reelup.svg";
import reeldown from "/images/reeldown.svg";
import leftcam from "/images/leftcam.svg";
import rightcam from "/images/rightcam.svg";
import Highlightsbg from "/images/Highlightsbg.svg";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useState } from "react";

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

const Highlights = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="highlights relative overflow-hidden">
      <img className="w-full" src={reelup}></img>
      <img
        src={Highlightsbg}
        className="absolute object-cover w-full h-full opacity-70 "
      ></img>

      <div className="relative flex justify-center items-center p-3 md:p-5 ">
        <img src={leftcam} className="opacity-20 w-2/5 "></img>

        <span className="absolute fontspecial text-lg sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl pb-2 md:pb-5">Highlights</span>

        <img src={rightcam} className="opacity-20 w-2/5 "></img>
      </div>

      <div className="gallery overflow-hidden gap-4 flex justify-center box-border">
        <Column
          className="Column"
          images={[
            images[0],
            images[1],
            images[2],
            images[3],
            images[4],
            images[5],
          ]}
          y={y}
        />
        <Column
          className="Column"
          images={[
            images[3],
            images[4],
            images[5],
            images[3],
            images[4],
            images[5],
          ]}
          y={y2}
        />
        <Column
          className="Column"
          images={[
            images[6],
            images[7],
            images[8],
            images[3],
            images[4],
            images[5],
          ]}
          y={y3}
        />
        <Column
          className="Column"
          images={[
            images[9],
            images[10],
            images[11],
            images[3],
            images[4],
            images[5],
          ]}
          y={y4}
        />
      </div>

      <img className="w-full mt-0" src={reeldown}></img>
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="Column relative h-full gap-2 flex flex-col "
      style={{ y }}
    >
      {images.map((src, index) => {
        return (
          <div className=" rounded-md" key={index}>
            <img src={`/images/${src}`}></img>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Highlights;

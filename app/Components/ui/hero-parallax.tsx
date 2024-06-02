"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
  useInView,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    id: number;
    name: string;
    path: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [mouseX, setMouseX] = useState(0);
  const [translateSpeed, setTranslateSpeed] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const edgeZone = 70; // Pixels from the edge of the window to be considered as an edge zone

    if (mouseX < edgeZone) {
      // Mouse is near the left edge
      setTranslateSpeed(-5); // Adjust speed as necessary
    } else if (mouseX > windowWidth - edgeZone) {
      // Mouse is near the right edge
      setTranslateSpeed(1); // Adjust speed as necessary
    } else {
      setTranslateSpeed(0); // No need to move the logos when the mouse is not near the edges
    }
  }, [mouseX]); // This effect runs whenever mouseX changes

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-1500, 10]), // Adjusted range
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[165vh] py-50 antialiased relative flex flex-col self-auto [perspective:800px] [transform-style:preserve-3d]"
      style={{ zIndex: -10 }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="parallax-container"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <motion.div
              style={{
                x: translateX,
              }}
              whileHover={{
                y: -30,
              }}
              key={product.id}
              className="group/product h-96 w-[24rem] relative flex-shrink-0"
            >
              <Image
                src={product.path}
                height="200" // Adjusted size
                width="200" // Adjusted size
                className="object-cover object-center absolute h-10% w-10% inset-0"
                alt={product.name}
              />
              <div className="absolute inset-0 h-full w-full opacity-0 group-hover:pointer-events-none"></div>
              <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.name}
              </h2>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <motion.div
              style={{
                x: translateXReverse,
              }}
              whileHover={{
                y: -30,
              }}
              key={product.id}
              className="group/product h-96 w-[24rem] relative flex-shrink-0"
            >
              <Image
                src={product.path}
                height="200" // Adjusted size
                width="200" // Adjusted size
                className="object-cover object-center absolute h-10% w-10% inset-0"
                alt={product.name}
              />
              <div className="absolute inset-0 h-full w-full opacity-0 group-hover:pointer-events-none"></div>
              <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.name}
              </h2>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <motion.div
              style={{
                x: translateX,
              }}
              whileHover={{
                y: -30,
              }}
              key={product.id}
              className="group/product h-96 w-[24rem] relative flex-shrink-0"
            >
              <Image
                src={product.path}
                height="200" // Adjusted size
                width="200" // Adjusted size
                className="object-cover object-center absolute h-10% w-10% inset-0"
                alt={product.name}
              />
              <div className="absolute inset-0 h-full w-full opacity-0 group-hover:pointer-events-none"></div>
              <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.name}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style jsx>{`
        @media (max-width: 768px) {
          .parallax-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export const Header = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
      controlsRight.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, [isInView, controlsLeft, controlsRight]);

  return (
    <div ref={ref} className="max-w-7xl mx-auto py-20 md:py-40 px-4 flex flex-col md:flex-row justify-between items-center w-full relative z-30">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={controlsLeft}
        className="flex-1 text-container relative z-30"
      >
        <h1 className="centered-heading text-2xl md:text-7xl font-bold dark:text-white">
          YOSEPH <br /> LATIF
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          I am a full-stack developer with a passion for blending the worlds of
          coding and art. I bring a creative approach to my projects, aiming to
          make the web a more engaging and beautiful place. My interest in coding
          was sparked after I noticed many parallels to chess, a game I have a
          lifelong passion for. I am at my best when I get the opportunity to
          think deeply about complex puzzles and turn creative ideas into reality.
          I have a diverse background, from studying Psychology and Neuroscience
          at UC San Diego, to working as a Technical Recruiter and a Chess Mentor,
          and I often draw from my diverse experiences to provide unique insights
          into what I work on. I have honed my skills in various programming
          languages and frameworks, and successfully built multiple full-stack
          applications, including an original concept for a website I had since
          childhood. I have embraced every challenge software engineering has
          presented and I look forward to countless more.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={controlsRight}
        className="flex-1 flex justify-center md:justify-end relative z-30"
        style={{ marginTop: "-20px" }} // Adjust as needed for overlap
      >
        <Image
          src="/yosimg.jpeg"
          alt="Profile Picture"
          width={488}
          height={488}
          className="rounded-full hover:brightness-110 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
};


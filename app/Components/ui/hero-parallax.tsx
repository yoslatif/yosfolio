"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
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
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [mouseX, setMouseX] = React.useState(0);
  const [translateSpeed, setTranslateSpeed] = React.useState(0);

    React.useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMouseX(event.clientX);
      };
    
      window.addEventListener('mousemove', handleMouseMove);
    
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    React.useEffect(() => {
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
    

  

  const springConfig = { stiffness: 700, damping: 70, bounce: 700 };

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
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.name}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.path}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// export const Header = () => {
//   return (
//     <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
//       <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
//         YOSEPH <br /> LATIF
//       </h1>
      // <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      //   I am a full-stack developer with a passion for blending the worlds of
      //   coding and art. I bring a creative approach to my projects, aiming to
      //   make the web a more engaging and beautiful place. My interest in coding
      //   was sparked after I noticed many parallels to chess, a game I have a
      //   lifelong passion for. I am at my best when I get the opportunity to
      //   think deeply about complex puzzles and turn creative ideas into reality.
      //   I have a diverse background, from studying Psychology and Neuroscience
      //   at UC San Diego, to working as a Technical Recruiter and a Chess Mentor,
      //   and I often draw from my diverse experiences to provide unique insights
      //   towards into I work on. I have honed my skills in various programming
      //   languages and frameworks, and successfully built multiple full-stack
      //   applications, including an original concept for a website I had since
      //   childhood. I have embraced every challenge software engineering has
      //   presented and I look forward to countless more.
      // </p>
//       <div>
//         <Link
//           href="https://www.linkedin.com/in/yoseph-latif/"
//           className="text-blue-500">
//           {" "}
//           LinkedIn{" "}
//         </Link>{" "}
//         |
//         <Link href="https://github.com/yoslatif" className="text-blue-500">
//           {" "}
//           GitHub{" "}
//         </Link>{" "}
//         |
//         <Link href="mailto:yoslatif@gmail.com" className="text-blue-500">
//           {" "}
//           Email Me{" "}
//         </Link>
//         <Image
//   src="/yosimg.jpeg"
//   alt="Profile Picture"
//   width={488}  // Adjust the size as needed
//   height={488} // Adjust the size as needed
//   className="rounded-full mx-auto hover:brightness-110 transition-all duration-300"
// />
//       </div>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 flex flex-col md:flex-row justify-between items-center w-full">
      <div className="flex-1">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
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
        towards into I work on. I have honed my skills in various programming
        languages and frameworks, and successfully built multiple full-stack
        applications, including an original concept for a website I had since
        childhood. I have embraced every challenge software engineering has
        presented and I look forward to countless more.
      </p>
        {/* Your links */}
        {/* <div>
        <Link
          href="https://www.linkedin.com/in/yoseph-latif/"
          className="text-blue-500">
          {" "}
          LinkedIn{" "}
        </Link>{" "}
        |
        <Link href="https://github.com/yoslatif" className="text-blue-500">
          {" "}
          GitHub{" "}
        </Link>{" "}
        |
        <Link href="mailto:yoslatif@gmail.com" className="text-blue-500">
          {" "}
          Email Me{" "}
        </Link>
        </div> */}
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/yosimg.jpeg"
          alt="Profile Picture"
          width={488}
          height={488}
          className="rounded-full hover:brightness-110 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    id: number;
    name: string;
    path: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
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

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/ pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {/* {product.name} */}
      </h2>
    </motion.div>
  );
};

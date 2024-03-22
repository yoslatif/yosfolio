import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Define an interface for the component props
interface AnimatedProjectProps {
  src: string; // Define the type of src as string
  alt: string; // Define the type of alt as string
}

const AnimatedProject: React.FC<AnimatedProjectProps> = ({ src, alt }) => {
  const animation = {
    initial: { scale: 0.9 },
    animate: { scale: 1 },
    transition: { duration: 0.9, ease: "easeOut" }
  };

  return (
    <motion.div {...animation}>
      <Image src="/ParmazonImg.png" alt="Background" width={400} height={200} layout='responsive' />
      <Image src="/ParmazonImg.png" alt="Background" width={400} height={200} layout='responsive' />

    </motion.div>
  );
};

export default AnimatedProject;

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface AnimatedProjectProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const AnimatedProject: React.FC<AnimatedProjectProps> = ({ src, alt, title, description, link }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image src={src} alt={alt} width={400} height={300} layout="responsive" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
        <div className="text-white p-4 text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="my-2">{description}</p>
          <a href={link} className="text-blue-300 underline">Learn More</a>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedProject;

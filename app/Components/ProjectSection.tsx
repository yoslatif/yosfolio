"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdDescription } from 'react-icons/md';

// Example project structure
const projects = [
  {
    id: 1,
    title: "Parmazon",
    description: "Parmazon Prime, built with a PostgreSQL Flask backend and a React/Redux frontend, is a delectable twist on the shopping experience, bringing the charm of Amazon to the world of artisanal cheeses. This platform allows users to easily explore and order an array of gourmet options with the same ease and reliability as their favorite online marketplace.",
    technologies: ["Flask", "React", "SQL", "JavaScript", "Python", "AWS", "Docker", "HTML", "CSS"],
    images: ["/ParmazonImg1.png", "/ParmazonImg2.png", "/ParmazonImg3.png", "/ParmazonImg4.png"],
    link: "https://parmazon-prime.onrender.com/",
    gitlink: "https://github.com/sophie97yang/Parmazon-Prime"
  },
  {
    id: 2,
    title: "Philosophize",
    description: "A philosophical debate platform built with a PostgreSQL Flask backend and a React frontend. Users can create and join debates on a variety of topics, and engage in thoughtful discussions with other users. There is only one topic per day to keep a focused topic and prevent doom-scrolling.",
    technologies: ["React", "Flask", "JavaScript", "HTML", "CSS"],
    images: ["/PhilosophizeImg.png", "/Philosophize1.png", "/Philosophize2.png", "/Philosophize3.png"],
    link: "https://philosophize.onrender.com/",
    gitlink: "https://github.com/yoslatif/philosophize"
  },
  {
    id: 3,
    title: "YosBnb",
    description: "AirBnb clone built using Node JS, React, and SQL. Project includes a strong demonstration of authentication features, booking, and review features, and a sleek design which imitates AirBnb's UI (one of my personal favorites) as close as possible.",
    technologies: ["React", "Node.js", "JavaScript", "SQL", "CSS", "HTML"],
    images: ["/yosbnb1.png", "/yosbnb2.png", "/yosbnb3.png", "/yosbnb4.png", "/yosbnb5.png",],
    link: "https://yosauthme.onrender.com/",
    gitlink: "https://github.com/yoslatif/AirBnb"
  },
  {
    id: 3,
    title: "Green Gains Fitness",
    description: "A fitness app that allows users to track their workouts and nutrition. Users can create custom workouts, track their progress, and view their workout history. The app also includes a nutrition tracker that allows users to log their meals and track their macronutrient intake.",
    technologies: ["React", "NextJS", "TypeScript", "CSS", "HTML", "Taildwind"],
    images: [],
    link: "https://green-gains-blush.vercel.app/",
    gitlink: "https://github.com/yoslatif/greenGains"
  }
  // Add other projects here...
];

const ProjectSection = () => {
  return (
    <section className="py-4">
      <CardContainer containerClassName="flex flex-col items-center gap-20">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full p-4 relative z-20"
          >
            <CardBody className="w-full p-4 relative z-20">
              <CardItem className="bg-black text-white shadow-lg rounded-lg overflow-hidden p-5 relative z-20 text-center">
                <div className="mb-8">
                  {/* Incrementally add components back */}
                  <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                    {project.images.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          alt={project.title}
                          width={700}
                          height={525}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
          
                <a href={project.link} className="visit-project-btn text-white mt-4 inline-block hover:scale-125 hover:transition-all hover:duration-300 hover:ease-in-out" style={{ zIndex: 50, pointerEvents: 'auto' }}>
                  Visit Project
                </a>
   
                <br />
                <a href={project.gitlink} className="visit-project-btn text-white mt-4 inline-block hover:scale-125 hover:transition-all hover:duration-300 hover:ease-in-out" style={{ zIndex: 50, pointerEvents: 'auto' }}>
                  GitHub Repo
                </a>
              </CardItem>
            </CardBody>
          </motion.div>
        ))}
      </CardContainer>
      <style jsx>{`
        .visit-project-btn:hover {
          box-shadow: 0 0 8px 4px rgba(0, 120, 255, 0.5); 
      
          padding: 0.7rem;
          border-radius: 0.9rem;
          background-color: transparent;
          color: cyan;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;

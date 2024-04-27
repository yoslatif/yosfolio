"use client";
import React, { useEffect, useState } from 'react';
import AnimatedProject from './AnimatedProj';
import Image from 'next/image';
// import { HeroParallax } from './ui/hero-parallax';
// import { langlogos } from '../../langlogos.json';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';


// Assume we have the projects data loaded from a JSON as shown previously
const ProjectSection = () => {
  // Example project structure
  const projects = [
    {
      id: 1,
      title: "Parmazon",
      description: "Parmazon Prime, built with a PostgreSQL Flask backend and a React/Redux frontend, is a delectable twist on the shopping experience, bringing the charm of Amazon to the world of artisanal cheeses. This platform allows users to easily explore and order an array of gourmet options with the same ease and reliability as their favorite online marketplace.",
      technologies: ["Flask", "React", "SQL"],
      image: "/ParmazonImg.png",
      link: "https://parmazon-prime.onrender.com/"
    },
    {
      id: 2,
      title: "Philosophize",
      description: "A philosophical debate platform built with a PostgreSQL Flask backend and a React frontend. Users can create and join debates on a variety of topics, and engage in thoughtful discussions with other users. There is only one topic per day to keep a focused topic and prevent doom-scrolling.",
      technologies: ["React", "Flask", "SQL"],
      image: "/PhilosophizeImg.png",
      link: "https://philosophize.onrender.com/"
    },
    {
      id: 3,
      title: "YosBnb",
      description: "AirBnb clone built using Node JS, React, and SQL. Project includes a strong demonstration of authentication features, booking, and review features, and a sleek design which imitates AirBnb's UI (one of my personal favorites) as close as possible.",
      technologies: ["NodeJS", "React"],
      image: "/yosbnbimg.png",
      link: "https://yosauthme.onrender.com/"
    }
    // Add more projects as needed
  ];

  return (
    <section className="py-4">
      <CardContainer containerClassName="flex flex-wrap justify-center gap-20">
        {projects.map((project) => (
          <CardBody key={project.id} className="w-full p-4">

            <CardItem className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
              <div className="mb-8">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={700}  // Adjust the size as needed
                  height={525} // Adjust the size based on aspect ratio
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <a href={project.link} className="visit-project-btn text-blue-500 mt-2 inline-block">
                Visit Project
              </a>
            </CardItem>
          </CardBody>
        ))}
      </CardContainer>
      <style jsx>{`
        .visit-project-btn:hover {
          box-shadow: 0 0 8px 4px rgba(0, 120, 255, 0.5); 
          transition: box-shadow 0.3s ease-in-out;
          padding: 0.3rem;
          border-radius: 0.9rem;
          // background-color: rgba(0, 120, 255, 0.1);
          background-color: pink;
          color: magenta;
        }
      `}</style>
    </section>
  );
};


export default ProjectSection;

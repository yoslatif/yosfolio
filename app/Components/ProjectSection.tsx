// // ProjectsSection.tsx
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: 'Project One',
//     description: 'A cool project I made',
//     imageUrl: '/projects/project-one.png',
//     liveUrl: '#',
//     codeUrl: '#'
//   },
//   // ...other projects
// ];

// const ProjectsSection = () => {
//   return (
//     <section className="p-20">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         variants={{
//           visible: { opacity: 1, translateY: 0 },
//           hidden: { opacity: 0, translateY: 100 }
//         }}
//       >
//         <h2 className="text-4xl font-playfair mb-8">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div key={project.title} className="border p-4 rounded-lg">
//               {/* ...content here */}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ProjectsSection;






// "use client";
// import React from 'react';
// import AnimatedProject from './AnimatedProj';

// const ProjectSection = () => {
//   // Your projects data might come from a list or however you have them stored
//   const projects = [
//     // Example project data
//     { src: '/path_to_project_image.jpg', alt: 'Project 1' },
//     // ...other projects
//   ];

//   return (
//     <section>
//       {/* Map through your projects and create an animated image for each */}
//       {projects.map((project, index) => (
//         <div key={index} className="project-frame">
//           <AnimatedProject src="/projects/newimptest.jpeg" alt="Description of Image" />
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ProjectSection;

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
      description: "A Philosophical debate platform built with a PostgreSQL Flask backend and a React frontend. Users can create and join debates on a variety of topics, and engage in thoughtful discussions with other users. There is only one topic per day to keep a focused topic and prevent doom-scrolling.",
      technologies: ["React", "Flask", "SQL"],
      image: "/PhilosophizeImg.png",
      link: "https://philosophize.onrender.com/"
    },
    {
      id: 3,
      title: "YosBnb",
      description: "AirBnb clone built using Node JS, React, and SQL. Sleek design that follows AirBnb's vision very closely.",
      technologies: ["NodeJS", "React"],
      image: "/yosbnbimg.png",
      link: "https://yosauthme.onrender.com/"
    }
    // Add more projects as needed
  ];

  // const langlogos = [
  //   { name: "Python", image: "/PythonLogo.png" },
  //   { name: "JavaScript", image: "/JavaScriptLogo.png" },
  //   { name: "React", image: "/ReactLogo.png" },
  //   { name: "Redux", image: "/ReduxLogo.png" },
  //   { name: "Flask", image: "/FlaskLogo.png" },
  //   { name: "PostgreSQL", image: "/PostgresLogo.png" }
  // ]

  return (
    <section className="py-12">
      <CardContainer containerClassName="flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <CardBody key={project.id} className="w-1/2 md:w-1/2 lg:w-1/3 p-4">
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
              <a href={project.link} className="text-blue-500 mt-2 inline-block">
                Visit Project
              </a>
            </CardItem>
          </CardBody>
        ))}
      </CardContainer>
    </section>
  );
};


export default ProjectSection;


// Type '{ src: string; alt: string; }' is missing the following properties from type 'AnimatedProjectProps': title, description, linkts(2739
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
      description: "brief description of the project",
      technologies: ["React", "Flask", "SQL"],
      image: "/PhilosophizeImg.png",
      link: "https://philosophize.onrender.com/"
    }
    // Add more projects as needed
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="project-frame">
          <AnimatedProject 
            src={project.image} 
            alt={project.title} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;


// Type '{ src: string; alt: string; }' is missing the following properties from type 'AnimatedProjectProps': title, description, linkts(2739
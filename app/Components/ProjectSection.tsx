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

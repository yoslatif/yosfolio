"use client"; // Keep this directive
import React from 'react';
import Header from "./Components/Header";
import ProjectsSection from './Components/ProjectSection';
import AboutSection from "./Components/AboutSection";

import './Styles/globals.css';

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

//   return (
//     <html>
//       <Header/>
//       <head/>      
//     <div className="root-layout"> {/* Use a div instead of <html> and <body> */}
//       <div>
//       <body>
//       {children}
//       <AboutSection/>
//       <ProjectsSection/>
//       </body>
//       </div>
    
//     </div>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <AboutSection />
        {children}
        <ProjectsSection />
        {children}
      </body>
    </html>
  );
}
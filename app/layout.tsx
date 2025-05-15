"use client"; // Keep this directive
import React from 'react';
import Header from "./Components/Header";
import ProjectsSection from './Components/ProjectSection';
import AboutSection from "./Components/AboutSection";
import BookComponent from './Components/BookComponent';
import FloatingDock from './Components/Footer';
import { LayoutGrid, cards } from './Components/FunFacts';
import Image from "next/image";



import './Styles/globals.css';
import Footer from './Components/Footer';



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
        <AboutSection />
        {children}
        <ProjectsSection />
        <LayoutGrid cards={cards} />
        {children}
        <FloatingDock />
      </body>
    </html>
  );
}
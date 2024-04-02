"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroParallax } from './ui/hero-parallax';
import { langlogos } from '../../langlogos.json';

const AboutSection = () => {
  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
        I'm a full-stack developer with a passion for blending the worlds of coding and art. I bring a creative approach to my projects, aiming to make the web a more engaging and beautiful place.
        </p>
        <p className="mb-4">
        My interest in coding was sparked after I noticed many parallels to chess, a game I have a lifelong passion for. I am at my best when I get the opportunity to think deeply about complex puzzles and turn creative ideas into reality. I have a diverse background, from studying Psychology and Neuroscience at UC San Diego, to working as a Technical Recruiter and a Chess Mentor, and I often draw from my diverse experiences to provide unique insights towards into I work on.

        </p>
        <p className="mb-4">
        I have honed my skills in various programming languages and frameworks, and successfully built multiple full-stack applications, including an original concept for a website I had since childhood. I have embraced every challenge software engineering has presented and I look forward to countless more.
        </p>
        <div>
          <Link href="https://www.linkedin.com/in/yoseph-latif/" className="text-blue-500"> LinkedIn </Link> | 
          <Link href="https://github.com/yoslatif" className="text-blue-500"> GitHub </Link> | 
          <Link href="mailto:yoslatif@gmail.com" className="text-blue-500"> Email Me </Link>
        </div>
      </div>
      <HeroParallax products={langlogos} />
    </section>
  );
};

export default AboutSection;

"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroParallax } from './ui/hero-parallax';
import { langlogos } from '../../langlogos.json';

const AboutSection = () => {
  return (
    <section className="p-8">

      <HeroParallax products={langlogos} />
    </section>
  );
};

export default AboutSection;

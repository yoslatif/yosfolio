"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ResumeModal from "./ResumeModal";

const Header = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  const playMusic = () => {
    const audio = document.getElementById(
      "backgroundMusic"
    ) as HTMLAudioElement | null;
    if (audio) {
      audio.play();
    }
  };

  const stopMusic = () => {
    const audio = document.getElementById(
      "backgroundMusic"
    ) as HTMLAudioElement | null;
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset the music to the start
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* Logo or Profile Image */}
          <div
            className="image-container"
            onMouseEnter={playMusic}
            onMouseLeave={stopMusic}
          >
            <Link href="/">
              <div className="glow-on-hover rounded-full cursor-pointer">
                <Image
                  src="/yoslogosamp.webp"
                  alt="Yoseph Latif"
                  width={70}
                  height={70}
                  className="rounded-full"
                />

              </div>
            </Link>
            
          </div>

          <audio id="backgroundMusic" loop>
            <source src="/CarelessWhisper.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            {/* <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link> */}
            {/* <Link
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Projects
            </Link> */}
            {/* <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</Link> */}

            <div className="flex-grow">
        <div className="flex justify-center space-x-10">
              <Link
                href="https://www.linkedin.com/in/yoseph-latif/"
                className="text-blue-500 glow-on-hover"
              >
                {" "}
                <Image
                  src="/linkedinLogo.png"
                  alt="linkedinLogo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />{" "}
              </Link>{" "}
              <Link
                href="https://github.com/yoslatif"
                className="text-blue-500 glow-on-hover"
              >
                {" "}
                <Image
                  src="/githubLogo.png"
                  alt="gitHubLogo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />{" "}
              </Link>{" "}
              <Link href="mailto:yoslatif@gmail.com" className="text-blue-500 glow-on-hover">
                {" "}
                <Image
                  src="/emailLogo.png"
                  alt="emailLogo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />{" "}
              </Link>
            </div>
            </div>
          </nav>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Projects
            </Link>
            <div className="text-gray=500"> | | | </div>
            <button
              onClick={openResumeModal}
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </header>
  );
};

export default Header;

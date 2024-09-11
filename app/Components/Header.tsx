"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ResumeModal from "./ResumeModal";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // For social media icons
import { MdEmail } from "react-icons/md"; // For the email icon
import { AiOutlineCalendar } from "react-icons/ai"; // For the calendar icon
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

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
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-100% shadow-sm">
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

          {/* Centered Name */}
          <div className="flex-grow text-center">
            <h1 className="text-4xl font-bold font-dancing-script text-white handwritten-animation">
              Yoseph Latif
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <div className="flex-grow">
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="https://www.instagram.com/yosdefinitely/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-pink-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
                </a>
                <a href="mailto:yoslatif@gmail.com">
                  <MdEmail className="hover:text-teal-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
                </a>
                <a
                  href="https://calendly.com/yoslatif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineCalendar className="hover:text-purple-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yoseph-latif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <LiaLinkedin className="hover:text-blue-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
                </a>
                <a
                  href="https://github.com/yoslatif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <BsGithub className="hover:text-gray-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-12 w-12" />
                </a>
              </div>
            </div>
          </nav>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-3">
            <Link
              href="/"
              className="text-base font-medium text-white-500 hover:text-gray-900 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              Projects
            </Link>
            <div className="absolute left-0 top-8 mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Skip to the fun stuff!
              </div>
            <div className="text-gray=500"> <br></br> </div>
            <button
              onClick={openResumeModal}
              className="whitespace-nowrap text-base font-medium text-white-500 hover:text-gray-900 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              Resume
            </button>
            <div className="absolute left-0 top-8 mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                A formal introduction!
              </div>
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
      <style jsx>{`
        // @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        // .font-dancing-script {
        //   font-family: 'Dancing Script', cursive;
        // }
        // .handwritten-animation {
        //   position: relative;
        //   padding-bottom: 0.1em;
        //   animation: handwriting 3s steps(190) forwards, blink-cursor 1.2s step-end infinite;
        //   white-space: nowrap;
        //   overflow: hidden;
        //   border-right: 0.1em solid white; /* The cursor */
        // }
        // .handwritten-animation::after {
        //   content: '♘';
        //   position: absolute;
        //   bottom: 0;
        //   right: 0;
        //   width: 0.1em;
        //   height: 1em;
        //   background-color: transparent;
        //   animation: blink-cursor 0.9s step-end infinite;
        // }
        // // .handwritten-animation::after {
        // //   content: '✍️'; /* Replace this with your desired emoji */
        // //   position: absolute;
        // //   bottom: 0;
        // //   right: 0;
        // //   margin-left: 5px;
        // //   animation: blink-cursor 0.75s step-end infinite;
        // // }
        // @keyframes handwriting {
        //   from {
        //     width: 0;
        //   }
        //   to {
        //     width: 100%;
        //   }
        // }
        // @keyframes blink-cursor {
        //   from, to {
        //     border-color: transparent;
        //   }
        //   50% {
        //     border-color: white;
        //   }
        // }


        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .font-dancing-script {
          font-family: 'Dancing Script', cursive;
        }
        .handwritten-animation {
          position: relative;
          padding-bottom: 0.1em;
          animation: handwriting 0.6s steps(700) forwards;
          white-space: nowrap;
          overflow: hidden;
        }
        .handwritten-animation::after {
          content: ''; /* Replace this with your desired emoji */
          position: absolute;
          bottom: 0;
          right: 0;
          margin-right: 10px;
          animation: blink-cursor 2.5s step-end infinite;
        }
        @keyframes handwriting {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink-cursor {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;


























// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import ResumeModal from "./ResumeModal";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { AiOutlineCalendar } from "react-icons/ai";
// import { LiaLinkedin } from "react-icons/lia";
// import { BsGithub } from "react-icons/bs";

// const Header = () => {
//   const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
//   const [isTransparent, setIsTransparent] = useState(false);

//   const openResumeModal = () => setIsResumeModalOpen(true);
//   const closeResumeModal = () => setIsResumeModalOpen(false);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     if (scrollY > 100) { // Adjust this value as needed
//       setIsTransparent(true);
//     } else {
//       setIsTransparent(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const playMusic = () => {
//     const audio = document.getElementById("backgroundMusic") as HTMLAudioElement | null;
//     if (audio) {
//       audio.play();
//     }
//   };

//   const stopMusic = () => {
//     const audio = document.getElementById("backgroundMusic") as HTMLAudioElement | null;
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//     }
//   };

//   return (
//     <header className={`sticky-header ${isTransparent ? 'transparent' : ''}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className={`flex justify-between items-center ${isTransparent ? 'py-4' : 'py-6'}`}>
//           <div
//             className="image-container logo"
//             onMouseEnter={playMusic}
//             onMouseLeave={stopMusic}
//           >
//             <Link href="/">
//               <div className="glow-on-hover rounded-full cursor-pointer">
//                 <Image
//                   src="/yoslogosamp.webp"
//                   alt="Yoseph Latif"
//                   width={70}
//                   height={70}
//                   className={`rounded-full ${isTransparent ? 'w-12 h-12' : 'w-16 h-16'}`}
//                 />
//               </div>
//             </Link>
//           </div>

//           <audio id="backgroundMusic" loop>
//             <source src="/CarelessWhisper.mp3" type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>

//           <div className="flex-grow text-center">
//             <h1 className={`font-bold font-dancing-script text-white handwritten-animation ${isTransparent ? 'text-2xl' : 'text-4xl'}`}>
//               Yoseph Latif
//             </h1>
//           </div>

//           <nav className="hidden md:flex space-x-10">
//             <div className="flex-grow">
//               <div className="flex justify-center items-center space-x-4">
//                 <a
//                   href="https://www.instagram.com/yosdefinitely/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagram className={`hover:text-pink-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-${isTransparent ? '10' : '14'} w-${isTransparent ? '10' : '14'}`} />
//                 </a>
//                 <a href="mailto:yoslatif@gmail.com">
//                   <MdEmail className={`hover:text-teal-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-${isTransparent ? '10' : '14'} w-${isTransparent ? '10' : '14'}`} />
//                 </a>
//                 <a
//                   href="https://calendly.com/yoslatif"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiOutlineCalendar className={`hover:text-purple-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-${isTransparent ? '10' : '14'} w-${isTransparent ? '10' : '14'}`} />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/yoseph-latif/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-green-500"
//                 >
//                   <LiaLinkedin className={`hover:text-blue-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-${isTransparent ? '10' : '14'} w-${isTransparent ? '10' : '14'}`} />
//                 </a>
//                 <a
//                   href="https://github.com/yoslatif"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-green-500"
//                 >
//                   <BsGithub className={`hover:text-gray-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-${isTransparent ? '9' : '12'} w-${isTransparent ? '9' : '12'}`} />
//                 </a>
//               </div>
//             </div>
//           </nav>

//           <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-3">
//             <Link
//               href="/"
//               className="text-base font-medium text-white-500 hover:text-gray-900 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out"
//             >
//               Projects
//             </Link>
//             <div className="text-gray=500"> <br></br> </div>
//             <button
//               onClick={openResumeModal}
//               className="whitespace-nowrap text-base font-medium text-white-500 hover:text-gray-900 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out"
//             >
//               Resume
//             </button>
//           </div>
//         </div>
//       </div>
//       <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
//     </header>
//   );
// };

// export default Header;











// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import ResumeModal from "./ResumeModal";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { AiOutlineCalendar } from "react-icons/ai";
// import { LiaLinkedin } from "react-icons/lia";
// import { BsGithub } from "react-icons/bs";

// const Header = () => {
//   const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
//   const [isTransparent, setIsTransparent] = useState(false);
//   const [isShrunk, setIsShrunk] = useState(false);

//   const openResumeModal = () => setIsResumeModalOpen(true);
//   const closeResumeModal = () => setIsResumeModalOpen(false);

//   const playMusic = () => {
//     const audio = document.getElementById(
//       "backgroundMusic"
//     ) as HTMLAudioElement | null;
//     if (audio) {
//       audio.play();
//     }
//   };

//   const stopMusic = () => {
//     const audio = document.getElementById(
//       "backgroundMusic"
//     ) as HTMLAudioElement | null;
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//     }
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsTransparent(true);
//       setIsShrunk(true);
//     } else {
//       setIsTransparent(false);
//       setIsShrunk(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isShrunk ? 'py-3 bg-transparent' : 'py-6 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'} ${isTransparent && !isShrunk ? 'bg-transparent' : ''}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center md:justify-start md:space-x-10">
//           {/* Logo or Profile Image */}
//           <div
//             className="image-container"
//             onMouseEnter={playMusic}
//             onMouseLeave={stopMusic}
//           >
//             <Link href="/">
//               <div className="glow-on-hover rounded-full cursor-pointer">
//                 <Image
//                   src="/yoslogosamp.webp"
//                   alt="Yoseph Latif"
//                   width={70}
//                   height={70}
//                   className="rounded-full"
//                 />
//               </div>
//             </Link>
//           </div>

//           <audio id="backgroundMusic" loop>
//             <source src="/CarelessWhisper.mp3" type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>

//           {/* Centered Name */}
//           <div className="flex-grow text-center">
//             <h1 className={`text-4xl font-bold font-dancing-script handwritten-animation text-white transition-transform duration-300 ${isShrunk ? 'text-3xl' : 'text-4xl'}`}>
//               Yoseph Latif
//             </h1>
//           </div>

//           {/* Navigation Links */}
//           <nav className="hidden md:flex space-x-10">
//             <div className="flex-grow">
//               <div className="flex justify-center items-center space-x-4">
//                 <a
//                   href="https://www.instagram.com/yosdefinitely/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagram className="hover:text-pink-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
//                 </a>
//                 <a href="mailto:yoslatif@gmail.com">
//                   <MdEmail className="hover:text-teal-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
//                 </a>
//                 <a
//                   href="https://calendly.com/yoslatif"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiOutlineCalendar className="hover:text-purple-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/yoseph-latif/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-green-500"
//                 >
//                   <LiaLinkedin className="hover:text-blue-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
//                 </a>
//                 <a
//                   href="https://github.com/yoslatif"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-green-500"
//                 >
//                   <BsGithub className="hover:text-gray-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-12 w-12" />
//                 </a>
//               </div>
//             </div>
//           </nav>

//           {/* Call-to-Action Button */}
//           <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-3">
//             <Link
//               href="/"
//               className="text-base font-medium text-white-500 hover:text-gray-900 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out"
//             >
//               Projects
//             </Link>
//             <div className="text-gray=500"> <br></br> </div>
//             <button
//               onClick={openResumeModal}
//               className="whitespace-nowrap text-base font-medium text-white-500 hover:text-gray-900 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out"
//             >
//               Resume
//             </button>
//           </div>
//         </div>
//       </div>
//       <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
//     </header>
//   );
// };

// export default Header;

// // components/Footer.tsx
// import React from "react";
// import { FaInstagram } from "react-icons/fa"; // For the Instagram icon
// import { MdEmail } from "react-icons/md"; // For the email icon
// import { AiOutlineCalendar } from "react-icons/ai"; // For the calendar icon
// import { LiaLinkedin } from "react-icons/lia";
// import { BsGithub } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-[#055a2d] text-white text-center p-2 z-50">
//       <div className="flex justify-center items-center space-x-4">
//         <a
//           href="https://www.instagram.com/yosdefinitely/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-green-500"
//         >
//           <FaInstagram size={20} />
//         </a>
//         <a
//           href="mailto:yoslatif@gmail.com"
//           className="hover:text-green-500"
//         >
//           <MdEmail size={20} />
//         </a>
//         <a
//           href="https://calendly.com/yoslatif"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-green-500"
//         >
//           <AiOutlineCalendar size={20} />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/yoseph-latif/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-green-500"
//           >
//             <LiaLinkedin size={20}/>
//           </a>
//           <a
//           href="https://github.com/yoslatif"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-green-500"
//           >
//             <BsGithub size={20}/>
//           </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// components/Footer.tsx
import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa"; //instagram icon
import { MdEmail } from "react-icons/md"; //email icon
import { AiOutlineCalendar } from "react-icons/ai"; //calendar icon
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-peachGlass backdrop-blur-2xl border-2 rounded-full border-glassPeachBorder border-transparent text-white text-center p-1 z-50 transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
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
        >
          <LiaLinkedin className="hover:text-blue-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
        </a>
        <a
          href="https://github.com/yoslatif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="hover:text-green-500 hover:scale-150 hover:transition-all hover:duration-300 hover:ease-in-out h-14 w-14" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

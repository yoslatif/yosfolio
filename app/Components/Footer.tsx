import React, { useState, useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa"; // Instagram icon
import { MdEmail } from "react-icons/md"; // Email icon
import { AiOutlineCalendar } from "react-icons/ai"; // Calendar icon
import { LiaLinkedin } from "react-icons/lia"; // LinkedIn icon
import { BsGithub } from "react-icons/bs"; // GitHub icon
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Helper function to calculate class names conditionally
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

const FloatingDock = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle scroll event to show the dock after scrolling a bit
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

  const items = [
    { title: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/yosdefinitely/", color: "hover:text-pink-500" },
    { title: "Email", icon: <MdEmail />, href: "mailto:yoslatif@gmail.com", color: "hover:text-teal-500" },
    { title: "Calendly", icon: <AiOutlineCalendar />, href: "https://calendly.com/yoslatif", color: "hover:text-purple-500" },
    { title: "LinkedIn", icon: <LiaLinkedin />, href: "https://www.linkedin.com/in/yoseph-latif/", color: "hover:text-blue-500" },
    { title: "GitHub", icon: <BsGithub />, href: "https://github.com/yoslatif", color: "hover:text-green-500" },
  ];

  return (
    <>
      {isVisible && (
        <>
          <FloatingDockDesktop items={items} />
          <FloatingDockMobile items={items} />
        </>
      )}
    </>
  );
};

const FloatingDockDesktop = ({ items }: { items: { title: string; icon: React.ReactNode; href: string; color: string }[] }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 h-16 flex gap-4 items-end rounded-2xl bg-peachGlass backdrop-blur-2xl px-4 pb-3 z-50"
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, color }: { mouseX: any; title: string; icon: React.ReactNode; href: string; color: string }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative transition-colors ${color}`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="flex items-center justify-center">{icon}</motion.div>
      </motion.div>
    </Link>
  );
}

const FloatingDockMobile = ({ items }: { items: { title: string; icon: React.ReactNode; href: string; color: string }[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 block md:hidden z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link href={item.href} key={item.title} className={`h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center ${item.color}`}>
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        {/* Replace this with your desired menu icon */}
        <span className="h-5 w-5 text-neutral-500 dark:text-neutral-400">Menu</span>
      </button>
    </div>
  );
};

export default FloatingDock;

"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

// Define the Card type
type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

// Cards array
export const cards: Card[] = [
  {
    id: 1,
    content: <p>This is the first card</p>,
    className: "bg-red-500",
    thumbnail: "/impimg2.webp",
  },
  {
    id: 2,
    content: <p>This is the second card</p>,
    className: "bg-blue-500",
    thumbnail: "/impimg2.webp",
  },
  {
    id: 3,
    content: <p>This is the third card</p>,
    className: "bg-green-500",
    thumbnail: "/impimg2.webp",
  },
];

// LayoutGrid component
export const LayoutGrid = ({ cards = [] }: { cards: Card[] }) => {
  console.log('Cards in LayoutGrid:', cards); // Debugging check

  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className, "")}>  {/* Use card.id as the key */}
          <div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </div>
        </div>
      ))}
      <div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

// ImageComponent to display the image
const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <Image
      src={card.thumbnail}
      height={500}
      width={500}
      priority // This ensures the image loads early for LCP
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
    />
  );
};

// SelectedCard component to display the selected card's content
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <div className="absolute inset-0 h-full w-full bg-black opacity-60 z-10" />
      <div
        className="relative px-8 pb-4 z-[70]"
        style={{
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {selected?.content}
      </div>
    </div>
  );
};

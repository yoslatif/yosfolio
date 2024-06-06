"use client";
import React, { useState } from "react";

const BookComponent = () => {
  const [activePage, setActivePage] = useState<number | null>(null);

  const togglePageFlip = (pageIndex: number) => {
    if (activePage === pageIndex) {
      setActivePage(null);
    } else {
      setActivePage(pageIndex);
    }
  };

  return (
    <div className="absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform">
      <div
        className={`absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform ${
          activePage === 2 ? "turn z-50" : ""
        }`}
        data-page="2"
        onClick={() => togglePageFlip(2)}
      >
        <div className="front text-xl sm:text-3xl md:text-5xl flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-gray-900 absolute right-0 w-full h-full">
          Page 3
        </div>
        <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 absolute w-full h-full">
          Page 4
        </div>
      </div>

      <div
        className={`page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform ${
          activePage === 1 ? "turn z-50" : ""
        }`}
        data-page="1"
        onClick={() => togglePageFlip(1)}
      >
        <div className="front text-xl sm:text-3xl md:text-5xl flex flex-col items-start justify-center px-2 sm:px-5 md:px-20 font-bold bg-gray-900  absolute right-0 w-full h-full">
          Welcome to this Page
          <p className="text-sm text-gray-500">Click me to open</p>
        </div>
        <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 absolute w-full h-full">
          This is Page 2
        </div>
      </div>
    </div>
  );
};

export default BookComponent;

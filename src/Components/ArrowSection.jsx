import React from "react";

export const ArrowSection = () => {
  return (
    <section className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black flex items-center justify-center">
      <svg 
        width={60}
        height={30}
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://ww.w3.org/2000/svg">
          <path
            d="M2 2L30 28L58 2"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={"2 6"}/>
      </svg>
    </section>
  );
};
import React from "react";

export const About = () => {
  return( 
    <section id="about" className="section bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full xl:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Tecnologias
              </h2>
              <p className="mb-4 text-accent text-center sm:text-left">
                Desenvolvedor em desenvolvimento
              </p>
              <div className="h-1 w-72 bg-fuchsia-500 mb-4 mx-auto sm:mx-0"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
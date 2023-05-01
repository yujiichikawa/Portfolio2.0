import React from "react";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space--y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6">
            <Socials/>
          </div>
          <p>&copy;thiago ichikawa</p>
        </div>
      </div>
    </footer>
  );
};
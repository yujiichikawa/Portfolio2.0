import React from "react";
import { NavBar } from "./NavBar";
import { Socials } from "./Socials";

export const Header = () => {
  return <header className="h-20 flex bg-gray-900 items-center fixed top-0 w-full text-white z-10">
    <div className="container mx-auto h-full flex items-center justify-center lg:justify-between">
      <NavBar />
      <Socials />
    </div>
  </header>;
};
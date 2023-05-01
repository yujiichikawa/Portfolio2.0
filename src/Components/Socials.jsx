import React from "react";
import { social } from "../data";

export const Socials = () => {
  return <div className="hidden lg:block">
    <ul className="flex space-x-6">
      {social.map((item,index)=>{
        return(
          <li className={`flex justify-content items-center ${item.color ? item.color :"text-withe"} ${item.colorHover ? item.colorHover:"hover:text-red-500"}`} key={index}>
            <a className="text-base scale-125" href={item.href}>
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  </div>;
};
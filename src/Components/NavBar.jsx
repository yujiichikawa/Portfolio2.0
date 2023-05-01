import React from "react";
import { navigation } from "../data";
import { Link } from 'react-scroll'

export const NavBar = () => {
  return <nav>
    <ul className="flex space-x-8 capitalize text-[15px]">
      {navigation.map((item,index)=>{
        return(
          <li className="text-white hover:text-gray-700 cursor-pointer" key={index}>
            <Link to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={400}
              offset={-70}
              className="transition-all duration-400">
                {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>;
};
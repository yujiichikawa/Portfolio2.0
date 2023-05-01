import React from "react";
import { inViewHandler } from "../animationHandler"
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { skills } from "../data";

export const Skills = () => {
  const animation = useAnimation()
  return <InView onChange={(inView)=>inViewHandler(inView,animation)}>
    <section className="h-76 bg-black py-12">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
          Tecnologias
        </h2>
        <div className="h-1 w-72 bg-cyan-700 mb-4 mx-auto sm:mx-0"/>
      </div>
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-7 md:grid-flow-row items-center flex-wrap" initial={{opacity:0,scale:0.5}} animate={animation}>
            {skills.map((skill,index)=>{
              return(
                <div className="max-h-xs" key={index}>
                  <img src={skill.image} alt=""/>
                </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  </InView>
};
import React from "react";
import { inViewHandler } from "../animationHandler"
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { RepositorieGit } from "./RepositorieGit";

export const Portfolio = () => {
  const animation = useAnimation()
  return (
    <InView onChange={(inView)=>inViewHandler(inView,animation)}>
      <section id="portfolio" className="section bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black	">
        <div className="container mx-auto">
          <motion.div className="flex flex-col items-center text-center" initial={{opacity:0,scale:0.5}} animate={animation}>
            <h2 className="section-title">Projetos</h2>
            <div className="h-1 w-72 bg-cyan-700 mb-4 mx-auto sm:mx-0"/>
          </motion.div>
          <RepositorieGit/>
        </div>
      </section>
    </InView>
  );
};
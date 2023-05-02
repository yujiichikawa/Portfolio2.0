import React from "react";
import { inViewHandler } from "../animationHandler"
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Hero = () => {
  const animation = useAnimation()
  return (
    <InView onChange={(inView)=>inViewHandler(inView,animation)}>
      <section
        id="home"
        className="h-[100vh] flex items-center w-full flex-col bg-gradient-to-bl from-gray-700 via-gray-900 to-black"
      >
        
        <div className="container mx-auto h-full flex justify-start">
          
            <div className="content-wrapper flex items-center">
              <div className="flex">
                <div className="w-1 mr-8 md:h-72 bg-gradient-to-br from-gray-700 from-cyan-900 to-gray-900 " />
                <motion.div className="content-wrapper flex items-center" initial={{opacity:0,scale:0.5}} animate={animation}>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="text-content">
                      <h1 className="text-4xl lg:text-5x1 pb-4 font-bold">
                        Olá, meu nome é <span className="text-cyan-700">Thiago</span>
                      </h1>
                      <p className="pb-4 max-w-[480px] text-lg text-left">
                        tenho 23 anos, sou formado em Análise e Desenvolvimento de
                        Sistemas na Universidade Tiradentes e estou cursando Ciência
                        da Computação na Faculdade Mauricio de Nassau. Tenho interesse
                        em Backend mais também gosto do Frontend.
                      </p>
                    </div>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>
    </InView>
  );
};

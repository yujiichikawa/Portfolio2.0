import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { ArrowSection } from "./ArrowSection";
import { inViewHandler } from "../animationHandler"
import { inView, motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Hero = () => {
  const animation = useAnimation()
  return (
    <InView onChange={(inView)=>inViewHandler(inView,animation)}>
      <section
        id="home"
        className="h-[100vh] flex items-center w-full flex-col bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
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
                  <div className="w-1/3 h-full lg:block hidden relative">
                    <Canvas className="absolute inset-0">
                      <OrbitControls enableZoom={false} />
                      <ambientLight intensity={0.9} />
                      <directionalLight position={[2.5, 2, 1]} />
                      <Sphere args={[1, 100, 200]} scale={2}>
                        <MeshDistortMaterial
                          color={"#04585d"}
                          attach={"material"}
                          distort={0.4}
                          speed={2}
                        />
                      </Sphere>
                    </Canvas>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex items-center justify-center">
          <ArrowSection />
        </div>
      </section>
    </InView>
  );
};

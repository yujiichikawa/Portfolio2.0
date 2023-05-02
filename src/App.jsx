import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { ArrowSection } from "./Components/ArrowSection";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";
import CardFlip from "./Components/CardFlip";
import { InformTecnol } from "./Components/InformTecnol";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ArrowSection/>
      <ArrowSection/>
      <Skills />
      <Portfolio />
      <InformTecnol/>
      <Footer />
    </div>
  );
};

export default App;

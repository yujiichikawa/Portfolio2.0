import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { ArrowSection } from "./Components/ArrowSection";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ArrowSection/>
      <ArrowSection/>
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;

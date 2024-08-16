import Footer from "@/components/footer/Footer";
import NavBar from "@/components/nav-bar/NavBar";
import BackEnd from "@/pages/BackEnd";
import Contact from "@/pages/Contact";
import Experience from "@/pages/Experience";
import FrontEnd from "@/pages/FrontEnd";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import React from "react";

function main() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Home />
      <section className="h-[60px] lg:h-[88px] w-full" id="experience" />
      <Experience />
      <section className="h-[60px] lg:h-[88px] w-full" id="frontendskills" />
      <FrontEnd />
      <section className="h-[60px] lg:h-[88px] w-full" id="backendskills" />
      <BackEnd />
      <section className="h-[60px] lg:h-[88px] w-full" id="projects" />
      <Portfolio />
      <section className="h-[60px] lg:h-[88px] w-full" id="contact" />
      <Contact />
      <section className="h-[60px] lg:h-[88px] w-full" />
      <Footer />
    </div>
  );
}
export default main;

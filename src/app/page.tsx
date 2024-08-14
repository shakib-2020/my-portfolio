import Footer from "@/components/footer/Footer";
import NavBar from "@/components/nav-bar/NavBar";
import BackEnd from "@/pages/BackEnd";
import FrontEnd from "@/pages/FrontEnd";
import Home from "@/pages/Home";
import React from "react";

function main() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Home />
      <section className="h-[88px] w-full" id="frontendskills" />
      <FrontEnd />
      <section className="h-[88px] w-full" id="backendskills" />
      <BackEnd />
      <Footer />
    </div>
  );
}
export default main;

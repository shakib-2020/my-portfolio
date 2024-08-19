import React from "react";
import Button from "@/components/Button/Button";

function Home() {
  return (
    <section
      className={`flex flex-col md:flex-row justify-center items-center mx-auto w-[85%] xl:w-[60%] gap-8 h-screen mt-[50px] lg:mt-0`}
      id="home"
    >
      {/* image */}
      <div className="pt-10 lg:pt-0">
        <div
          className={`h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] 2xl:h-[450px] 2xl:w-[450px] bg-slate-700 rounded-full shadow-2xl shadow-blue-700`}
        >
          <div
            className="w-full h-full rounded-full bg-cover bg-center border-8 border-blue-600-800"
            style={{
              backgroundImage: "url('/p2.jpeg')",
            }}
          ></div>
        </div>
      </div>
      {/* into text */}
      <div className="flex flex-col gap-2 lg:gap-1">
        <span className="font-light text-[#ffff]/50 text-base lg:text-lg">
          Full Stack Developer
        </span>
        <h2 className="font-bold mb-2 text-2xl lg:text-4xl 2xl:text-5xl">
          Md. Nazmus Shakib
        </h2>
        <p className="font-mono mb-2 text-wrap text-justify text-sm lg:text-base">
          Hello! I'm Shakib from Bangladesh, currently pursuing my Bachelor's
          degree. Alongside, I thrive as a full time Mobile & Web App Developer,
          crafting innovative solutions and bringing ideas to life. If my
          projects or experience interests you, feel free to contact me!
        </p>
        <div className="flex gap-0 lg:gap-1">
          <Button href={"#projects"} variant="outlineBlue">
            Projects
          </Button>
          <Button href={"#contact"} variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;

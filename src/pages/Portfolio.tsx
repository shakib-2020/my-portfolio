"use client";
import TitleSection from "@/components/TitleSection/TitleSection";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import projects from "@/data/projects.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface projectInfoType {
  title: string;
  description: string;
  technologies: [];
  projectType: string;
  date: string;
  link: string;
  thumbnails: string;
  images: [];
  deployments: [];
}

const projectTypes = [
  {
    title: " Template Designs",
    id: "template",
  },

  {
    title: "Front-End Magic",
    id: "frontend",
  },
  {
    title: "Back-End Mastery",
    id: "backend",
  },
  {
    title: "App Wonders",
    id: "appdev",
  },
];

function Portfolio() {
  const [openProject, setOpenProject] = useState(false);
  const [projectInfo, setProjectInfo] = useState<projectInfoType | null>(null);

  useEffect(() => {
    const insideProject: any = document.getElementById("insideProject");

    // Function to handle clicks outside the target div
    const handleClickOutside = (event: any) => {
      if (!insideProject?.contains(event.target)) {
        // The click was outside the target div
        console.log("Clicked outside the target div");
        setOpenProject(false);
        // Perform your action here (e.g., close the popup)
      }
    };

    if (openProject) {
      // To show the alert and disable main site scrolling
      document.body.classList.add("overflow-hidden");
      // Select the target div

      // Attach the event listener to the document
      document.addEventListener("click", handleClickOutside);
    } else {
      // To hide the alert and enable main site scrolling
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openProject]);

  return (
    <div>
      <TitleSection title="Projects" />
      <ContentWrapper className={"relative"}>
        {/* <h2 className="text-2xl font-normal">Gallery</h2>
        <TitleUnderLine width="w-40" />{" "} */}
        <Tabs
          defaultValue="template"
          className="w-full min-h-[320px] gap-8 bg-none"
        >
          <TabsList className="bg-transparent my-4 flex flex-col lg:flex-row mb-20">
            {projectTypes.map((item, index) => (
              <TabsTrigger
                key={index}
                value={item.id}
                className="rounded-none border border-transparent text-white/50 data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-b-blue-500 text-base lg:text-lg"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* -------------------------------- */}

          {projectTypes.map((type, index) => (
            <TabsContent
              key={index}
              value={type.id}
              className="max-w-[1920px] mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4">
                {projects.projects
                  .filter((item) => item.projectType === type.id)
                  .map((item: any, index) => (
                    <div
                      onClick={() => {
                        setOpenProject(true);
                        setProjectInfo(item);
                      }}
                      key={index}
                    >
                      <div
                        className={`group relative w-full min-w-[475] h-[270px] col-span-1 rounded-3xl bg-gray-800 overflow-hidden cursor-pointer`}
                      >
                        <Image
                          className="rounded-3xl group-hover:scale-125 transition-all ease-in-out"
                          src={item.thumbnail}
                          // width={475}
                          // height={270}
                          alt="project-thumbnail"
                          fill={true}
                        />
                        <div className="absolute bg-[#0a1b48]/95 inset-0 h-full w-full transition-all ease-in-out duration-500 transform translate-y-full group-hover:translate-y-32">
                          <div className="flex flex-col w-full h-full items-start p-5">
                            <h2 className="text-white font-extrabold text-xl">
                              {item.title}
                            </h2>
                            <div className="flex flex-row gap-2 my-2 flex-wrap">
                              {item.technologies.map(
                                (item: any, index: any) => (
                                  <span
                                    className="px-2 py-1 bg-slate-200 text-slate-900 text-sm font-mono border rounded-md hover:border-white cursor-default"
                                    key={index}
                                  >
                                    {item}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* project detalis */}
            </TabsContent>
          ))}
          {/* projects info----------------- */}
          {projectInfo !== null && (
            <div
              className={`${
                openProject ? "fixed" : "hidden"
              } top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/80 z-50`}
            >
              <div
                className="w-[95%] h-[75%] lg:w-[70%] lg:h-[80%] bg-[#222222] overflow-y-auto px-4 py-4 rounded-3xl"
                id="insideProject"
              >
                <div className="flex flex-col items-center gap-4">
                  <Carousel
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                    // plugins={[
                    //   Autoplay({
                    //     delay: 2000,
                    //   }),
                    // ]}
                  >
                    <CarouselContent>
                      {projectInfo.images.map((item) => (
                        <CarouselItem className="basis-[85%] lg:basis-[70%]">
                          <Image
                            className="w-6/5 h-auto rounded-3xl"
                            src={item}
                            width={675}
                            height={470}
                            alt="project-thumbnail"
                            // fill={true}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-0.5 lg:left-10 bg-slate-300 text-slate-900 border-none " />
                    <CarouselNext className="right-0.5 lg:right-10 bg-slate-300 text-slate-900 border-none" />
                  </Carousel>
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {projectInfo.title}
                  </h2>
                  <div className="flex flex-row gap-2">
                    {projectInfo.technologies.map((item, index) => (
                      <span
                        className="px-2 py-1 bg-slate-200 text-slate-900 text-sm font-mono border rounded-md hover:border-white cursor-default"
                        key={index}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono lg:w-[80%]">
                    {projectInfo.description.split("\n").map((line, index) => {
                      if (line.startsWith("-")) {
                        return <li key={index}>{line.slice(1).trim()}</li>;
                      } else {
                        return <p key={index}>{line.trim()}</p>;
                      }
                    })}
                  </p>
                  <div className="flex gap-4 m-10">
                    {projectInfo.deployments.map((item: any, index) => (
                      <div
                        key={index}
                        className="bg-slate-300 px-8 py-2 rounded-full cursor-pointer flex gap-2 items-center justify-center hover:bg-slate-400 transition-all"
                      >
                        {item.platform === "Github" ? (
                          <FaGithub size={24} color="black" />
                        ) : (
                          <FaExternalLinkAlt size={24} color="black" />
                        )}
                        <span className="text-slate-900 text-sm font-bold font-mono">
                          {item.platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Tabs>
      </ContentWrapper>
    </div>
  );
}

export default Portfolio;

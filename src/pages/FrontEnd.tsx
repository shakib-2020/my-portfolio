import TitleSection from "@/components/TitleSection/TitleSection";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import Image from "next/image";
import React from "react";
import {
  DiBootstrap,
  DiJavascript,
  DiReact,
  DiStackoverflow,
  DiTypo3,
} from "react-icons/di";

const frontEndIcon = [
  {
    name: "Javascript",
    icon: "devicon-javascript-plain",
    color: "colored",
  },
  {
    name: "Typescript",
    icon: "devicon-typescript-plain",
    color: "colored",
  },
  {
    name: "React",
    icon: "devicon-react-original",
    color: "colored",
  },
  {
    name: "Next",
    icon: "devicon-nextjs-original-wordmark",
    color: "colored",
  },
  {
    name: "React-Native",
    icon: "devicon-react-original",
    color: "colored",
  },
  {
    name: "Expo",
    icon: "",
  },
];

function FrontEnd() {
  return (
    <section>
      <TitleSection title="Front-end Skills" />
      <ContentWrapper className={"flex flex-col lg:flex-row"}>
        <section className="lg:w-[50%]">
          {/* what i'm doing? */}
          <h2 className="text-2xl font-normal">What i'm doing?</h2>
          <div className="lg:ml-6 mt-8">
            <h2 className="text-xl mb-2 font-bold">Web Application</h2>
            <p className="font-mono text-justify md:pr-20 text-sm lg:text-base">
              It is a well-known fact that a person is often distracted by
              surrounding text when examining a graphic design, especially if
              the text has any meaning. The purpose of Lorem Ipsum is to replace
              meaningful text with a suitable, meaningless alternative.
            </p>
          </div>
          <div className="lg:ml-6 mt-8">
            <h2 className="text-xl mb-2 font-bold">Cross Platform </h2>
            <p className="font-mono text-justify md:pr-20 text-sm lg:text-base">
              It is a well-known fact that a person is often distracted by
              surrounding text when examining a graphic design, especially if
              the text has any meaning. The purpose of Lorem Ipsum is to replace
              meaningful text with a suitable, meaningless alternative.
            </p>
          </div>
        </section>
        <section className="lg:w-[50%]">
          {/* skill sets*/}
          <h2 className="text-2xl mt-10 lg:mt-0">Stuffs I use</h2>
          <div
            className="flex flex-row justify-center items-center min-h-[300px] w-full 
          "
          >
            <div className="grid grid-cols-3 gap-3 lg:gap-10">
              {frontEndIcon.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-1 border-2 p-4 hover:shadow-blue-50 shadow-blue-700 shadow-sm transition-all duration-500"
                  >
                    {item.name === "Expo" && (
                      <Image
                        src={"/expo-logo-light.png"}
                        alt="expo-logo"
                        width={30}
                        height={30}
                        className="mt-1"
                      />
                    )}
                    <i
                      className={`${item.icon} text-4xl hover:[${item.color}]`}
                    ></i>
                    <h3 className="text-sm md:text-lg">{item.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ContentWrapper>
    </section>
  );
}

export default FrontEnd;

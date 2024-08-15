import TitleSection from "@/components/TitleSection/TitleSection";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi";

import React from "react";

function Experience() {
  return (
    <section className="">
      <TitleSection title="Experience" />
      <ContentWrapper className={"min-h-[500px] lg:min-h-[300px]"}>
        <Tabs
          defaultValue="jobs"
          className="w-full h-[320px] lg:flex gap-8 bg-none"
        >
          <TabsList className="flex lg:flex-col w-full lg:w-fit h-fit lg:h-full bg-[#333333] rounded-none gap-0 mb-4 lg:mb-0">
            <TabsTrigger
              value="jobs"
              className="w-full h-[50%] rounded-none text-xl text-center flex lg:flex-col gap-1"
            >
              <HiBriefcase size={24} />
              Jobs
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="w-full h-[50%] rounded-none text-xl text-center flex lg:flex-col gap-1"
            >
              <HiAcademicCap size={24} />
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="jobs">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-2xl">
                Mobile App Developer@Retrosoft.Ltd{" "}
              </h2>
              <h3 className="text-base lg:text-xl">2024-01-06 - Present</h3>
              <ul className="flex flex-col gap-3 list-disc ml-6 mt-2 font-mono text-sm lg:text-base">
                <li>
                  Contributing to Retrosoft's mission by delivering cutting-edge
                  software solutions.
                </li>
                <li>
                  Collaborating with cross-functional teams to develop and
                  deploy applications.
                </li>
                <li>
                  Utilizing problem-solving skills to overcome technical
                  challenges.
                </li>
                <li>
                  Swiftly adapting to evolving project needs in dynamic
                  environments.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <ul className="flex flex-col gap-8">
              {/* bse */}
              <li className="flex flex-col gap-2">
                <h2 className="text-xl lg:text-2xl font-bold">
                  B.Sc. in Computer Science & Engineering
                </h2>
                <h3 className="text-base lg:text-lg">Present</h3>
                <h3 className=" text-lg lg:text-xl font-mono">
                  Metropolitan University,
                </h3>
                <h3 className="text-lg font-mono"> Sylhet, Bangladesh</h3>
              </li>
              {/* diploma */}
              <li className="flex flex-col gap-2">
                <h2 className="text-xl lg:text-2xl font-bold">
                  Diploma In Engineering (Computer Technology)
                </h2>
                <h3 className="text-base lg:text-lg">Passed in 2022</h3>
                <h3 className="text-lg lg:text-xl font-mono">
                  Moulvibazar Polytechnic Institute,
                </h3>
                <h3 className="text-lg font-mono">
                  Moulvibazar, Sylhet, Bangladesh
                </h3>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </ContentWrapper>
    </section>
  );
}

export default Experience;

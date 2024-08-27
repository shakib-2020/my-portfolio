import TitleSection from "@/components/TitleSection/TitleSection";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi";

import React from "react";

function Experience() {
  return (
    <section className="">
      <TitleSection title="Experience" />
      <ContentWrapper className={"min-h-[500px] lg:min-h-[300px] mb-10"}>
        {/* ---------------------first item ----------------------------------*/}
        <div className="grid grid-cols-12 lg:gap-8">
          {/* timeline */}
          <h3 className="col-span-3 hidden lg:block lg:text-xl mt-8 text-end">
            01-04-23 - Present
          </h3>
          <div className="col-span-8 relative border-l-[1px] lg:border-l-2 pl-8 py-8 border-red-50">
            {/* circle */}
            <div className="absolute top-0 -left-[10.5px] lg:-left-[11px] w-[20px] h-[20px] bg-white rounded-full"></div>
            {/* content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-2xl">Freelance@Locally</h2>
              <h3 className="block lg:hidden lg:text-xl">01-04-23 - Present</h3>
              <ul className="flex flex-col gap-3 list-disc ml-6 mt-2 font-mono text-sm lg:text-base xl:text-lg">
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
          </div>
        </div>
        {/*------------------ last item --------------------*/}
        <div className="grid grid-cols-12 lg:gap-8">
          {/* timeline */}
          <h3 className="col-span-3 hidden lg:block lg:text-xl mt-8 text-end">
            01-04-23 - Present
          </h3>
          <div className="col-span-8 relative border-l-[1px] lg:border-l-2 pl-8 py-8 border-red-50">
            {/* circle */}
            <div className="absolute top-0 -left-[10.5px] lg:-left-[11px] w-[20px] h-[20px] bg-white rounded-full"></div>
            {/* content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-2xl">
                Mobile App Developer@Retrosoft.Ltd
              </h2>
              <h3 className="block lg:hidden lg:text-xl">01-04-23 - Present</h3>
              <ul className="flex flex-col gap-3 list-disc ml-6 mt-2 font-mono text-sm lg:text-base xl:text-lg">
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
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

export default Experience;

// {/* <ul className="flex flex-col gap-4">
// {/* bse */}
// <li className="flex flex-col gap-2">
//   <h2 className="text-xl lg:text-2xl">
//     B.Sc. in Computer Science & Engineering
//   </h2>
//   <h3 className="text-base lg:text-lg">Present</h3>
//   <h3 className=" text-base lg:text-lg font-mono">
//     Metropolitan University,<br></br> Sylhet, Bangladesh
//   </h3>
//   <h3 className="text-lg font-mono"></h3>
// </li>
// {/* diploma */}
// <li className="flex flex-col gap-2">
//   <h2 className="text-xl lg:text-2xl">
//     Diploma In Engineering (Computer Technology)
//   </h2>
//   <h3 className="text-base lg:text-lg">Passed in 2022</h3>
//   <h3 className="text-base lg:text-lg font-mono">
//     Moulvibazar Polytechnic Institute,<br></br> Moulvibazar,
//     Sylhet, Bangladesh
//   </h3>
//   <h3 className="text-base font-mono">CGPA - 3.58 out of 4.00</h3>
// </li>
// </ul> */}

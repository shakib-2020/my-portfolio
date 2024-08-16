import TitleSection from "@/components/TitleSection/TitleSection";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import React from "react";

function Portfolio() {
  return (
    <section>
      <TitleSection title="Projects" />
      <ContentWrapper className={"flex justify-center items-center"}>
        <h2 className=" text-2xl lg:text-4xl">Comming Soon...</h2>
      </ContentWrapper>
    </section>
  );
}

export default Portfolio;

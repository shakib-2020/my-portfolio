import React from "react";

function TitleSection({ title }: { title: string }) {
  return (
    <div className="min-h-[120px] lg:min-h-[150px] w-full flex items-center bg-[#252525] px-10 lg:px-16 border-y border-[#333333]">
      <h1 className="text-2xl lg:text-4xl font-extrabold">{title}</h1>
    </div>
  );
}

export default TitleSection;

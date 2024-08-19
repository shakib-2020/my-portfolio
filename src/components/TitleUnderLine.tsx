import React from "react";

function TitleUnderLine({ width }: { width: string }) {
  return (
    <div className="relative flex items-center my-1 w-full">
      <div className="absolute left-0 w-8 border border-[#0382f9] z-10"></div>
      <div className={`absolute border border-[#353535] ${width}`}></div>
    </div>
  );
}

export default TitleUnderLine;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function NavBar() {
  const [active, setActive] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 flex flex-row justify-between items-center border-b border-[rgb(51,51,51)] px-10 py-5 bg-[#222222] w-full">
      <div className="">
        <Image src={"/logo.png"} width={150} height={150} alt="logo" />
      </div>
      <div className="lg:hidden" onClick={() => setShowMenu(true)}>
        <HiOutlineMenuAlt3 size={24} />
      </div>
      <div
        className={`absolute lg:relative top-0 ${
          showMenu ? "left-0" : "left-[999px] lg:left-0"
        } -mt-[20px] lg:mt-0 flex flex-col lg:flex-row items-center lg:justify-end justify-center w-screen h-screen lg:h-0 mx-auto gap-4 bg-slate-800 lg:bg-transparent p-6 transition-all duration-700 ease-in-out lg:transition-none `}
      >
        <div
          className="absolute lg:hidden right-24 top-48 border-2 border-[#b5aeae22] rounded"
          onClick={() => setShowMenu(false)}
        >
          <HiOutlineX size={32} />
        </div>

        {[
          "Home",
          "Experience",
          "Front-End Skills",
          "Back-end Skills",
          "Portfolio",
          "Contact",
        ].map((item, index) => {
          return (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "").replace("-", "")}`}
              className={`text-xl lg:text-base  text-slate-50/50 ${
                active === item ? "text-slate-200" : ""
              } hover:text-slate-50 transition-all `}
              onClick={() => {
                setActive(item);
                setShowMenu(false);
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;

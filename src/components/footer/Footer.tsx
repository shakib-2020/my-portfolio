import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full flex flex-row justify-between p-5 px-10 border-t border-[#333333]">
      <div className="flex gap-4">
        <Link
          href={"#"}
          className="font-normal text-slate-50/50 hover:text-slate-50 transition-all"
        >
          LinkedIn
        </Link>
        <Link
          href={"#"}
          className="font-normal text-slate-50/50  hover:text-slate-50 transition-all"
        >
          Github
        </Link>
        <Link
          href={"#"}
          className="font-normal text-slate-50/50  hover:text-slate-50 transition-all"
        >
          Facebook
        </Link>
      </div>
      <div>
        <p className="font-normal text-white">© 2022 All rights reserved..</p>
      </div>
    </div>
  );
}

export default Footer;

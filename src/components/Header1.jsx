import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import { CgArrowTopLeft } from "react-icons/cg";
import { CiLaptop } from "react-icons/ci";

let tabs = ["Sources", "Console", "Elements", "Network", "Performance","Memory","Application","Security"];
const Header1 = () => {
  return (
    <div className=" flex items-center overflow-hidden border-b-[1px]">
      <div className="flex gap-3 py-1 px-2">
        <span>
          <CgArrowTopLeft />
        </span>
        <span>
          <CiLaptop />
        </span>
      </div>
      <div className="ml-3 mr-3  font-small">|</div>
      <div className="">
        <ul
          className="flex flex-wrap text-[12px] font-small "
        
        >
          <li className="flex gap-4">
            {tabs.map((tab,i) => {
              return <button key={i} className="py-1 px-2 hover:bg-slate-400">{tab}</button>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header1;

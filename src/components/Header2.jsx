import React from "react";
import { MdOutlineStopCircle } from "react-icons/md";
import { RxValueNone } from "react-icons/rx";
import { MdFilterAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LiaWifiSolid } from "react-icons/lia";
import { LuArrowUpFromLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";

const Header2 = () => {
  return (
    <div className="p-1 flex flex-wrap items-center gap-3 border-b-[1px]">
      <div className="flex gap-3">
        <span>
          <MdOutlineStopCircle />
        </span>
        <span>
          <RxValueNone />
        </span>
      </div>
      <div className=" font-small">|</div>
      <div className="flex gap-3">
        <span>
          <MdFilterAlt />
        </span>
        <span>
          <IoIosSearch />
        </span>
      </div>
      <div className=" font-small">|</div> 
      <div className="flex items-center gap-1">
        <input type="checkbox" id="preserve-log" />
        <label className="font-small text-[14px]" htmlFor="preserve-log">Preserve log</label>
      </div>
      <div className="flex items-center gap-1">
        <input type="checkbox" id="disable-cache" />
        <label className="font-small text-[14px]" htmlFor="disable-cache">Disable cache</label>
      </div>
      <select className="font-small text-[14px]">
        
            <option value="not-throtling">No throtling</option>
            <option value="not-throtling">Fast 3G</option>
            <option value="not-throtling">Slow 3G</option>
            <option value="not-throtling">Offline</option>
      </select>
      <div>
        <LiaWifiSolid/>
      </div>
      <div className=" font-small">|</div> 
      <div className="flex gap-3">
        <div>
            <LuArrowUpFromLine/>
        </div>
        <div>
            <LuArrowDownToLine/>
        </div>
      </div>
    </div>
  );
};

export default Header2;

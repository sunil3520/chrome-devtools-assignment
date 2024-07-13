import React from "react";

const Header3 = () => {
  return (
    <div>
      <div className="p-1 flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Filter"
          className=" pl-2 rounded-r-lg rounded-l-lg bg-slate-500"
        ></input>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="invert" />
          <label className="font-small text-[14px]" htmlFor="invert">
           Invert
          </label>
        </div>
        <div className=" font-small">|</div>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="data-url" />
          <label className="font-small text-[14px]" htmlFor="data-url">
           Hide data URLs
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="extension-url" />
          <label className="font-small text-[14px]" htmlFor="extension-url">
           Hide extension URLs
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header3;

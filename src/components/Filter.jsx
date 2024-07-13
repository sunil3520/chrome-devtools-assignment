import React from "react";
let arr = [
  "All",
  "Fetch/XHR",
  "Docs",
  "CSS",
  "JS",
  "Font",
  "Image",
  "Media",
  "Manifest",
  "WS",
  "WASM",
  "Other",
];

const Filter = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex flex-wrap gap-1">
        {arr.map((el, i) => {
          return (
            <button
              type="button"
              class="text-[white] text-[10px] border-white-800 hover:bg-gray-900 font-medium rounded-md  px-2 py-1 text-center border-[0.5px]"
            >
              {el}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-1">
          <input type="checkbox" id="blocked-response-cookies" />
          <label className="font-small text-[14px]" htmlFor="blocked-response-cookies">
           Blocked response cookies
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="blocked-response-cookies" />
          <label className="font-small text-[14px]" htmlFor="blocked-response-cookies">
           Blocked requests
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="blocked-response-cookies" />
          <label className="font-small text-[14px]" htmlFor="blocked-response-cookies">
          3rd-party requests
          </label>
        </div>
    </div>
  );
};

export default Filter;

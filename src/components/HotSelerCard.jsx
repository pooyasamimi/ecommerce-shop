import React from "react";

export default function HotSelerCard({
  brand,
  popularity,
  Icon,
  bgColor = "black",
}) {
  return (
    <>
      <div className="flex gap-2 items-center flex-grow justify-center">
        <div
          className="h-8 w-8 rounded-lg flex justify-center items-center [&>*]:h-5 [&>*]:w-5 [&>*]:text-white"
          style={{ backgroundColor: bgColor }}
        >
          {<Icon />}
        </div>
        <div className="flex flex-col text-center gap-y-[2px]">
          <span className="">{brand}</span>
          <span className="border border-gray-300 rounded-md text-[10px] font-medium w-fit px-1">
            {popularity}%
          </span>
        </div>
      </div>
    </>
  );
}

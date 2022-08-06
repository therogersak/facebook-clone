import Image from "next/image";
import React from "react";

function SideItem({ img, name, main, Icon }) {
  return (
    <>
      <div className="flex items-center space-x-3 pl-3 py-1 cursor-pointer hover:bg-gray-200">
        <div
          className={`w-10 -mb-1 ${
            Icon &&
            "h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center"
          }`}
        >
          {main ? (
            <img className="rounded-full" src={img} />
          ) : (
            <Image src={img} />
          )}
          {Icon && <Icon className="h-7" />}
        </div>
        <span className="text-[17px]">{name}</span>
      </div>
    </>
  );
}

export default SideItem;

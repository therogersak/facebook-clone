import React from "react";

function WidgetItem({ avatar, name, id }) {
  return (
    <>
      <div className="flex px-3 hover:bg-gray-200 py-2 cursor-pointer rounded-sm items-center space-x-3">
        <img src={avatar} className="border rounded-full w-10 h-10" />
        <p className="font-thin">{name}</p>
      </div>
    </>
  );
}

export default WidgetItem;

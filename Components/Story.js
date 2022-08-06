import React from "react";

function Story({ avatar, name, id }) {
  return (
    <>
      <div className="bg-white overflow-hidden shadow-md border w-[130px] rounded-md h-[180px] float-left">
       <img src={avatar} className="rounded-full w-10 h-10 border-[3px] border-blue-500" />
       <p className="truncate w-13">{name}</p>
      </div>
    </>
  );
}

export default Story;

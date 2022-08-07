import React, { useState } from "react";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { uplodeState } from "../Atoms/UplodeAtom";
import {useSession} from 'next-auth/react'

function Uplode() {
  const [open, setOpen] = useRecoilState(uplodeState);
  const {data:session} = useSession();
  return (
    <>
     {
      session &&  <div className="bg-white border rounded-md p-4 shadow-md">
      <div className="flex items-center space-x-3 border-b-2 pb-3">
        <img
          src="https://cdn.sharechat.com/cartoonimgs.._a0c117c_1603509293864_sc_cmprsd_40.jpg"
          className="w-10 h-10 rounded-full"
        />
        <button
          onClick={() => setOpen(true)}
          className="bg-gray-200 w-full py-[10px] rounded-full border-none shadow-sm flex items-start pl-4"
        >
          <span className="">What's in your mind, Captain</span>
        </button>
      </div>
      <div className="flex space-x-3 mt-2 justify-between">
        <button className="btn2">
          <VideoCameraIcon className="h-7" /> <span>Live Video</span>
        </button>
        <button className="btn2" onClick={() => setOpen(true)}
>
          <PhotographIcon className="h-7" />
          <span>Photo/video</span>
        </button>
        <button className="btn2" onClick={() => setOpen(true)}>
          <EmojiHappyIcon className="h-7" />
          <span>Feeling/activity</span>
        </button>
      </div>
    </div>
     }
    </>
  );
}

export default Uplode;

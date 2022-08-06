import React from "react";
import {
  DotsHorizontalIcon,
  ThumbUpIcon,
  ChatAlt2Icon,
  ShareIcon,
  GlobeIcon,
} from "@heroicons/react/outline";

function Post({ img, id, avatar, caption, name }) {
  return (
    <>
      <div className="bg-white shadow-md border mt-3 p-4 rounded-md">
        <div>
          {/* Post Header */}
          <div className="flex items-center space-x-3">
            <img src={avatar} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <span>{name}</span>
              <p className="flex items-center text-sm text-gray-600 ">
                19 min
                <GlobeIcon className="h-5 ml-1" />
              </p>
            </div>
            <DotsHorizontalIcon className="h-6" />
          </div>
          {/* Post Caption */}
          <div>
            <p className="pt-2">{caption}</p>
          </div>
          {/* Post Middel */}
          <div className="py-2">
            <img
              src={img}
              className="object-contain w-full h-full rounded-md"
            />
          </div>
          {/* Post Achivments
          <div>

          </div> */}
          {/* Post Buttons */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-t-2 border-gray-300">
            <ThumbUpIcon className="btn3" />
            <ChatAlt2Icon className="btn3" />
            <ShareIcon className="btn3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

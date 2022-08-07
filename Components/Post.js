import React, { useState, useEffect } from "react";
import {
  DotsHorizontalIcon,
  ThumbUpIcon,
  ChatAlt2Icon,
  ShareIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpIconFill } from "@heroicons/react/solid";
import Moment from "react-moment";
import { db } from "../firebaseConfig/firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";

function Post({ img, id, avatar, caption, name, timestamp }) {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState([]);
  const { data: session } = useSession();

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );
  useEffect(
    () =>
      setLike(likes.findIndex((like) => like.id === session?.user?.uid) !== -1),
    [likes]
  );

  const likeHandler = async () => {
    if (like) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        name: session?.user?.name,
      });
    }
  };
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
                <Moment fromNow>{timestamp?.toDate()}</Moment>
                <GlobeIcon className="h-5 ml-2" />
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
          {session && (
            <div>
              {/* {/* Post Achivments  */}
              <div className="my-1 px-5">
                <p>{likes.length}</p>
              </div>
              {/* Post Buttons */}
              <div className="flex items-center justify-between px-4 pt-4 pb-2 border-t-2 border-gray-300">
                {like ? (
                  <ThumbUpIconFill
                    onClick={() => likeHandler()}
                    className="btn3"
                  />
                ) : (
                  <ThumbUpIcon className="btn3" onClick={() => likeHandler()} />
                )}
                <ChatAlt2Icon className="btn3" />
                <ShareIcon className="btn3" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Post;

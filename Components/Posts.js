import React, { useState, useEffect } from "react";
import Post from "./Post";
import Uplode from "./Uplode";
import { db } from "../firebaseConfig/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );
  console.log(posts);
  return (
    <>
      <div className="h-screen overflow-y-scroll  pb-[5rem] col-span-2 max-w-3xl mx-auto lg:max-w-6xl scrollbar-hide">
        <Uplode />
        {posts.map((data) => (
          <Post
            img={data.data().image}
            avatar={data.data().avatar}
            id={data.id}
            key={data.id}
            caption={data.data().caption}
            name={data.data().name}
            timestamp={data.data().timestamp}
          />
        ))}
      </div>
    </>
  );
}

export default Posts;

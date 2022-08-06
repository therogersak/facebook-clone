import React from "react";
import Post from "./Post";
import Uplode from "./Uplode";

const DUMMY_TEXT = [
  {
    id: 1,
    img: "https://th-thumbnailer.cdn-si-edu.com/a11lI2GJgXuOiJh6TacnnOedIpA=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/two-male-lions-Kenya-631.jpg",
    avatar:
      "https://cdn.sharechat.com/cartoonimgs.._a0c117c_1603509293864_sc_cmprsd_40.jpg",
    caption: "Lion are alive on earth planet",
    name: 'Captain Yadav'

  },

  {
    id: 2,
    img: "https://th-thumbnailer.cdn-si-edu.com/a11lI2GJgXuOiJh6TacnnOedIpA=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/two-male-lions-Kenya-631.jpg",
    avatar:
      "https://cdn.sharechat.com/cartoonimgs.._a0c117c_1603509293864_sc_cmprsd_40.jpg",
    caption: "Lion are alive on earth planet",
    name: 'Captain Yadav'
  },
];

function Posts() {
  return (
    <>
      <div className="h-screen overflow-y-scroll pb-[5rem] col-span-2 max-w-3xl mx-auto lg:max-w-6xl p-4 px-10 scrollbar-hide">
        <Uplode />
        {DUMMY_TEXT.map((data) => (
          <Post
            img={data.img}
            avatar={data.avatar}
            id={data.id}
            key={data.id}
            caption={data.caption}
            name={data.name}
          />
        ))}
      </div>
    </>
  );
}

export default Posts;

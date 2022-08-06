import React from "react";
import ModalUplode from "./ModalUplode";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Widgets from "./Widgets";

function Feed() {
  return (
    <>
      <main className="flex mt-4">
        <Sidebar />
        <section className="overflow-x-hidden w-fit">
          {/* <Stories /> */}
          <Posts />
        </section>
        <Widgets />
        <ModalUplode />
      </main>
    </>
  );
}

export default Feed;

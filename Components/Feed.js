import React from "react";
import ModalUplode from "./ModalUplode";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Widgets from "./Widgets";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
      <section className="max-w-sm mx-auto"> <Posts /></section>
      ) : (
        <main className="flex mt-4">
          <Sidebar />
          <section className="overflow-x-hidden p-2 md:p-5 lg:p-10 xl:py-5 lg:max-w-3xl xl:px-12 mx-auto w-fit">
            {/* <Stories /> */}
            <Posts />
          </section>
          <Widgets />
        </main>
      )}
    </>
  );
}

export default Feed;

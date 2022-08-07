import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Feed from "../Components/Feed";
import ModalUplode from "../Components/ModalUplode";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-hidden ">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <ModalUplode />
    </div>
  );
}

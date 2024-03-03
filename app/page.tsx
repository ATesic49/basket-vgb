import Image from "next/image";
import teren from "@/public/imgs/BacketballField.jpeg"
import Avatar from "./components/Avatar";
import avatar from '@/public/imgs/avatar.jpeg'
import tribine from '@/public/imgs/tribine.jpeg'
import Navbar from "./components/Navbar";
import Trener from "./components/Trener";
import Changes from "./components/Changes";
import Credits from "./components/Credits";
import prisma from "@/lib/prisma";
import AvararHolder from "./components/AvararHolder";
import Loading from "./components/Loading";
export default async function Home() {
  return (
    <>
      <Loading />
      <main className="flex relative flex-col justify-center  items-center md:h-full w-full min-h-svh gap-8" >
        <Image priority src={tribine} alt="" fill className="object-cover object-center h-full" quality={2}></Image>
        <div className="md:my-32 relative md:aspect-[662/1000] md:w-auto md:h-screen w-11/12 p-4 flex justify-center items-center rounded-2xl bg-gray-100">
          <Credits />

          <div className="bg-white w-full z-30 h-1/2 bg-opacity-50 rounded-b-xl border-t-8 border-dashed absolute top-1/2 flex justify-center items-end font-bold text-4xl text-gray-400 border-gray-100 pb-8"><p className="opacity-75 text-6xl ">Klupa</p></div>
          <Image src={teren} className="h-full object-contain aspect-auto" alt=""></Image>


          <AvararHolder />


        </div>
      </main>
    </>
  );
}

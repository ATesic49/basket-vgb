import Image from "next/image";
import teren from "@/public/imgs/BacketballField.jpeg"
import Avatar from "./components/Avatar";
import avatar from '@/public/imgs/avatar.jpeg'
import tribine from '@/public/imgs/tribine.jpeg'
import Navbar from "./components/Navbar";
import Trener from "./components/Trener";
export default function Home() {
  return (
    <main className="flex flex-col justify-center bg-gray-200 items-center w-full min-h-svh gap-8 ">
      <Image src={tribine} fill alt="" className="object-cover object-center" quality={2}></Image>
      <div className="relative md:aspect-[662/1000] md:w-auto md:h-[80vh] w-11/12 p-4 flex justify-center items-center rounded-2xl bg-white ">
        <div className="bg-white w-full z-30 h-1/2 bg-opacity-50 rounded-b-xl border-t-8 border-dashed absolute top-1/2 flex justify-center items-end font-bold text-4xl text-gray-400 border-gray-100 pb-8"><p className="opacity-75 text-6xl ">Klupa</p></div>
        <Image src={teren} className="h-full object-contain aspect-auto" alt=""></Image>
        <Avatar c={true} avatar={avatar} top={'top-1/2'} left={'left-1/2'} ime="Aleksa Tesic"></Avatar>
        <Avatar c={false} avatar={avatar} top={'top-1/4'} left={'left-1/4'} ime='Andrej Jovovic'></Avatar>
        <Avatar c={false} avatar={avatar} top={'top-1/4'} left={'left-3/4'} ime='Andrej Jovovic'></Avatar>
        <Avatar c={false} avatar={avatar} top={'top-3/4'} left={'left-1/4'} ime='Andrej Jovovic'></Avatar>
        <Avatar c={false} avatar={avatar} top={'top-3/4'} left={'left-3/4'} ime='Andrej Jovovic'></Avatar>
        <Trener />

      </div>
    </main>
  );
}

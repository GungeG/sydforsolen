"use client";
import Image from "next/image";
import MarqueeComponent from "./components/marquee";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <MarqueeComponent text="7/8 - 9/8 2025" />
      <MarqueeComponent text="VI LUKKER AF FOR SOMMEREN" direction="right" />
      <h1 className="font-exposure text-4xl text-yellow">Your Text Here</h1>
      <Image src="/logo.png" alt="logo" width={1000} height={1000} />
      <p className="mt-4">This text should be in the default font</p>
    </div>
  );
}

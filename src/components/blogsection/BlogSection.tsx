"use client";
import React, {useState} from "react";
import { Vortex } from "../Animations/vortex";
import { useRouter } from "next/navigation";
import SubscribeSection from "../subscribe/SubscribeSection";

export function BlogSection() {
  const router = useRouter();
  const [openSubscribe, setOpenSubscribe] = useState(false);

  const handleSubscribeClick = () => {
    setOpenSubscribe(true);
  }

  const handleModalClose = () => {
    setOpenSubscribe(false);
  }

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Coming Soon!
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Stay tuned for our latest updates and insights.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" onClick={() => handleSubscribeClick()}>
            Subscribe
          </button>
          <button className="px-4 py-2 cursor-pointer text-white " onClick={() => router.replace("/")}>go to home</button>
        </div>
      </Vortex>

      <SubscribeSection openModal={openSubscribe} onModalClose={handleModalClose} />
    </div>
  );
}

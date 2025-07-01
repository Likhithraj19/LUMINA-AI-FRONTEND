"use client";

import { PlaceholdersAndVanishInput } from "@/components/Animations/placeholders-and-vanish-input";

export default function Input() {
  const placeholders = [
    "Research on the latest trends in AI",
    "What is the best way to learn React?",
    "How to build a website?",
    "Research on Machine Learning",
    "Research on the latest trends in AI",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div >
    <h2 className="text-center text-5xl font-medium mt-78 bg-gradient-to-t from-zinc-400 via-neutral-400 to-gray-400 text-transparent bg-clip-text ">
    Hello, I am Lumina
  </h2>
    <div className="h-[60rem] flex flex-col justify-center  items-center px-4">
     
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
    </div>
  );
}

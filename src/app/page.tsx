import { TextHoverEffect } from "@/components/Animations/text-hover-effect";
import { ModeToggle } from "@/components/themetoggle/ModeToggle";
import { Navbar } from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <>
    <Navbar />
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="LUMINA" />
    </div>
    </>
  );
}

import { TextHoverEffect } from "@/components/Animations/text-hover-effect";
import { ModeToggle } from "@/components/themetoggle/ModeToggle";
import { Navbar } from "@/components/navbar/Navbar";
import { AboutSection } from "@/components/aboutsection/AboutSection";
export default function Home() {
  return (
    <>
    <Navbar />
    <AboutSection />
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="LUMINA" />
    </div>
    </>
  );
}

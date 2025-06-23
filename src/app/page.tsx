import { TextHoverEffect } from "@/components/Animations/text-hover-effect";
import { ModeToggle } from "@/components/themetoggle/ModeToggle";
export default function Home() {
  return (
    <>
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="LUMINA" />
    </div>
    <div className="absolute top-4 right-4">
      <ModeToggle />
    </div>
    </>
  );
}

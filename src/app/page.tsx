import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950 text-gray-100 text-3xl ">
      Hello Test!
      <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
        Click Me
      </Button>
    </div>
    </>
  );
}

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { IconCaretDownFilled, IconSparkles } from "@tabler/icons-react";

export default function Model() {
  return (
    <div className="flex flex-col items-start space-y-2">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-300 ml-6">LUMINA</h1>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="flat" radius="full" className="py-2 pl-6  " endContent={<IconCaretDownFilled className="h-5 w-5 shrink-0 " />}>
            <div className="flex items-center gap-1 text-sm font-medium text-neutral-300 uppercase ">
            mistral-small-latest
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72 bg-neutral-800 space-y-2 p-2">
          <DropdownMenuItem>
            <h1 className="text-md font-medium text-transparent pl-2 w-[400px] bg-clip-text bg-gradient-to-r from-blue-400 via-violet-300 to-purple-300 ">Upgrade your model</h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
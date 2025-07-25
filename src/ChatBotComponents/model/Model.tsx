import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@heroui/react";
import { NavbarButton } from "@/components/navbar/navbar-menu";
import { ChevronDown, Check, Zap, Brain } from "lucide-react";
import { IconCaretDownFilled, IconSparkles } from "@tabler/icons-react";

export default function Model() {
  return (
    <div className="flex flex-col items-start space-y-2">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-300 ml-6">LUMINA</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="flat" radius="full" className="py-2 pl-6" endContent={<IconCaretDownFilled className="h-5 w-5 shrink-0" />}>
            <div className="flex items-center gap-1 text-sm font-medium text-neutral-300 ">
              <span className="text-neutral-400 text-sm">Lumina</span> 1.0
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-80 bg-neutral-800 space-y-2 p-2">
          <div className="px-2 py-2">
            <h3 className="text-neutral-300 font-medium  ">Choose your model</h3>
          </div>

          <DropdownMenuItem>
            <div className="flex items-center justify-between px-1 py-1">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="text-neutral-200 font-sm">Default model for daily research</div>
                  <div className="text-neutral-400 text-sm">Lumina 1.0</div>
                </div>
              </div>
              <Check className="w-5 h-5 text-blue-400 ml-6 " />
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem>
            <div className="flex items-center justify-between px-1 py-1">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="text-neutral-200 font-medium">Fastest model for research</div>
                  <div className="text-neutral-400 text-sm">Lumina 1.5</div>
                </div>
              </div>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem>
            <div className="flex items-center justify-between px-1 py-1">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="text-neutral-200 font-medium">Deep research with reasoning</div>
                  <div className="text-neutral-400 text-sm">Lumina 1.5 pro</div>
                </div>
              </div>
            </div>
          </DropdownMenuItem>
          
          {/* <DropdownMenuItem>
            <div className="px-2 py-2">
              <div className="text-neutral-200 font-medium">Based on your Search history</div>
              <div className="text-neutral-400 text-sm">Personalization (preview)</div>
            </div>
          </DropdownMenuItem> */}
          
          <DropdownMenuItem>
            <h1 className="text-md font-medium text-transparent pl-2 w-[400px] bg-clip-text bg-gradient-to-r from-blue-400 via-violet-300 to-purple-300">Upgrade to Lumina AI Pro</h1>

            <NavbarButton variant="gradient">
              Upgrade
            </NavbarButton> 
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
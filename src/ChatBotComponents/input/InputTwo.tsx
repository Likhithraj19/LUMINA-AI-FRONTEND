"use client"

import { Input } from "@/components/ui/input";
import { Plus, Search, Edit3, Mic, Send } from 'lucide-react';
import { useState } from "react";

export default function InputTwo() {

  const [search, setSearch] = useState(false);

  return (
    <div className=" mt-80 bg-inherit flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="relative bg-zinc-900 rounded-full shadow-lg">
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          
          <Input
            placeholder="Ask Lumina"
            className="w-full bg-transparent text-gray-100 pl-16 pr-16 py-8 placeholder-gray-400 border-none focus:ring-0 focus:outline-none rounded-full h-16 "
            style={{ fontSize: '16px' }}
          />
          
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-3 z-10">
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors cursor-pointer ">
              <Send className="w-6 h-6 text-gray-400" />
            </button>
            
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors cursor-pointer ">
              <Mic className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
        
        {/* <div className="flex items-center justify-center space-x-6 mt-6">
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-700">
            <Search className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Deep Research</span>
          </button>
          
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-700">
            <Edit3 className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Canvas</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
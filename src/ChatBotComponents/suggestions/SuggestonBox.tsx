"use client"
import { Brain } from "lucide-react";
import { useState } from "react";

const suggestions = [
  { 
    id: 1, 
    title: "Explain the concept of AI",
    icon: Brain
  },
  { 
    id: 2, 
    title: "Quick Link 2",
    icon: Brain
  },
  { 
    id: 3, 
    title: "Quick Link 3",
    icon: Brain
  },
];

export default function SuggestionBox() {
  return (
    // <div className="flex flex-row gap-2 justify-center items-center mt-40">
      <div className="flex flex-row gap-4 justify-center items-center mt-40">
        {suggestions.map((suggestion) => (
          <div 
            key={suggestion.id} 
            className="h-20 w-80 text-sm bg-inherit rounded-2xl border border-slate-700 p-4 flex items-center justify-start gap-3 hover:bg-neutral-800 transition-colors cursor-pointer text-white"
          >
            <suggestion.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
            <span className="text-left">{suggestion.title}</span>
          </div>
        ))}
      </div>
    //</div> 
  );
}
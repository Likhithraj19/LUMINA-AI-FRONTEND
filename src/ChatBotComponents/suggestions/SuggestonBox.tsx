"use client"
import { Brain, BrainCog, BookOpen, Paperclip } from "lucide-react";

const suggestions = [
  { 
    id: 1, 
    title: "Explain the concept of AI",
    icon: Brain
  },
  { 
    id: 2, 
    title: "Research about Deep Learning",
    icon: BookOpen
  },
  { 
    id: 3, 
    title: "Research about AI",
    icon: Paperclip
  },
];

export default function SuggestionBox() {
  return (
      <div className="flex flex-row gap-3 justify-center items-center mt-40 w-full max-w-3xl">
        {suggestions.map((suggestion) => (
          <div 
            key={suggestion.id} 
            className="h-18 w-65 text-sm bg-inherit rounded-2xl border border-neutral-700 p-4 flex items-center justify-start gap-3 hover:bg-neutral-800 transition-colors cursor-pointer text-gray-300"
          >
            <suggestion.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
            <span className="text-left">{suggestion.title}</span>
          </div>
        ))}
      </div>
  );
}
"use client"

import { Input } from "@/components/ui/input";
import axios, { AxiosResponse } from "axios";
import { Plus, Mic, Send } from 'lucide-react';
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  isLoading?: boolean;
}

interface InputTwoProps {
  onNewMessage: (message: Message) => void;
}

export default function InputTwo({ onNewMessage }: InputTwoProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;
    
    setLoading(true);
    const userInput = input;
    setInput("");

    const userMessage: Message = {
      id: Date.now().toString(),
      content: userInput,
      isUser: true
    };

    onNewMessage(userMessage);
    
    try {
      const res: AxiosResponse = await axios.post("http://localhost:5000/q", {
        input: userInput
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: res.data.response,
        isUser: false
      };

      onNewMessage(botMessage);
    } catch (error) {
      console.error("Error sending message:", error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I couldn't process your request. Please try again.",
        isUser: false
      };
      onNewMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-inherit flex flex-col items-center justify-center p-4 w-full">
      <div className="w-full max-w-3xl">
        <div className="relative bg-inherit rounded-full shadow-lg">
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
            <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Plus className="w-6 h-6 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-neutral-800 w-48">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      Attach File
                      <Plus className="w-6 h-6 text-gray-400" /> 
                    </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
          
          <Input
            placeholder="Ask Lumina"
            className="w-full bg-transparent text-gray-100 pl-16 pr-16 py-8 placeholder-gray-400 border-none focus:ring-0 focus:outline-none rounded-full h-16 text-lg"
            style={{ fontSize: '16px' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-3 z-10">
            <button 
              className="p-2 hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
              onClick={handleSendMessage}
              disabled={loading || !input.trim()}
            >
              <Send className={`w-6 h-6 ${loading ? 'text-gray-600' : 'text-gray-400'}`} />
            </button>
            
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors cursor-pointer">
              <Mic className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
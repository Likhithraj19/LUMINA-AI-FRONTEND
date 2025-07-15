"use client"

import { Input } from "@/components/ui/input";
import axios, { AxiosResponse } from "axios";
import { Plus, Mic, Send } from 'lucide-react';
import { useState } from "react";

export default function InputTwo() {

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    
    try {
      const res: AxiosResponse = await axios.post("http://localhost:5000/q", {
        input
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      setResponse(res.data.response);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
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
    <div className="mt-20 bg-inherit flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-3xl">

      {response && (
        <div className="mb-6 p-4 bg-zinc-800 rounded-lg text-gray-100">
          <p>{response}</p>
        </div>
      )}
    
    <div className="relative bg-inherit rounded-full shadow-lg">
      {/* <div className="w-full max-w-3xl relative bg-zinc-900 rounded-full shadow-lg"> */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
          <Plus className="w-6 h-6 text-gray-400" />
        </div>
        
        <Input
          placeholder="Ask Lumina"
          className="w-full bg-transparent text-gray-100 pl-16 pr-16 py-8 placeholder-gray-400 border-none focus:ring-0 focus:outline-none rounded-full h-16 "
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
    {/* </div>   */}
    </div>
  </div>
  );
}
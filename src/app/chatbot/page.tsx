"use client";

// import Input from '@/ChatBotComponents/input/Input'
// import SideBar from '@/ChatBotComponents/sidebar/SideBar'
import Header from '@/ChatBotComponents/header/Header'
import InputTwo from '@/ChatBotComponents/input/InputTwo'
import SuggestonBox from '@/ChatBotComponents/suggestions/SuggestonBox'
import React, {useState} from 'react'

interface Message {
    content: string;
    isUser: boolean;
  }

export default function ChatbotPage() {

    const [hasStartedConversation, setHasStartedConversation] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    
    const handleNewMessage = (newMessage: Message) => {
      setHasStartedConversation(true);
      setMessages(prev => [...prev, newMessage]);
    };
    return (
       <>
       <div className="flex flex-col items-center w-full h-full">
         {!hasStartedConversation && <Header/>}
         {!hasStartedConversation && <SuggestonBox/>}
         {messages.length > 0 && (
           <div className="flex-1 w-full max-w-4xl overflow-y-auto p-4 pt-10 pb-4">
             {messages.map((message, index) => (
               <div 
                 key={index} 
                 className={`mb-6 p-4 rounded-lg ${
                   message.isUser 
                     ? "bg-zinc-800 text-gray-100 ml-auto max-w-[80%]" 
                     : "bg-inherit text-gray-100 mr-auto max-w-[80%]"
                 }`}
               >
                 <p>{message.content}</p>
               </div>
             ))}
           </div>
         )}
         <InputTwo onNewMessage={handleNewMessage} />
       </div>
       </>
    )
}
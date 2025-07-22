"use client";

// import Input from '@/ChatBotComponents/input/Input'
// import SideBar from '@/ChatBotComponents/sidebar/SideBar'
import Header from '@/ChatBotComponents/header/Header'
import InputTwo from '@/ChatBotComponents/input/InputTwo'
import SuggestonBox from '@/ChatBotComponents/suggestions/SuggestonBox'
import React, {useState, useEffect, useRef} from 'react'

import { Spinner } from '@heroui/react';

interface Message {
    id: string;
    content: string;
    isUser: boolean;
    isLoading?: boolean;
}

export default function ChatbotPage() {
    const [hasStartedConversation, setHasStartedConversation] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if(messagesEndRef.current){
        messagesEndRef.current.scrollIntoView({behavior : "smooth"})
      }
    }, [messages, isWaitingForResponse])
    
    const handleNewMessage = (newMessage: Message) => {
      setHasStartedConversation(true);
      
      if (newMessage.isUser) {
        setIsWaitingForResponse(true);
        setMessages(prev => [...prev, newMessage]);
      } else {
        setIsWaitingForResponse(false);
        setMessages(prev => [...prev, newMessage]);
      }
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
                     ? "bg-zinc-800 text-gray-100 ml-auto w-fit max-w-[80%]" 
                     : "bg-inherit text-gray-100 mr-auto max-w-[80%]"
                 }`}
               >
                 <p>{message.content}</p>
               </div>
             ))}
             
             {isWaitingForResponse && (
               <div className="mb-6 p-4 mr-auto max-w-[80%] flex items-center">
                 <Spinner classNames={{label: "text-foreground mt-4"}} variant='dots' />
               </div>
             )}
             
             <div ref={messagesEndRef} />
           </div>
         )}
         <div className={`${messages.length === 0 ? 'mt-24' : ''} w-full`}>
           <InputTwo onNewMessage={handleNewMessage} />
         </div>
       </div>
       </>
    )
}
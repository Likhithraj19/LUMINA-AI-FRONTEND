"use client";

// import Input from '@/ChatBotComponents/input/Input'
// import SideBar from '@/ChatBotComponents/sidebar/SideBar'
import Header from '@/ChatBotComponents/header/Header'
import InputTwo from '@/ChatBotComponents/input/InputTwo'
import SuggestonBox from '@/ChatBotComponents/suggestions/SuggestonBox'
import React, {useState, useEffect, useRef} from 'react'
import Typewriter from 'typewriter-effect'
import ReactMarkdown from 'react-markdown'

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
                 {message.isUser ? (
                   <p>{message.content}</p>
                 ) : (
                   <div className="text-gray-100 prose prose-invert max-w-none">
                     <ReactMarkdown
                       components={{
                         h1: ({children}) => (
                           <h1 className="text-2xl font-bold text-white mb-4 mt-6 border-b border-gray-600 pb-2">
                             {children}
                           </h1>
                         ),
                         h2: ({children}) => (
                           <h2 className="text-xl font-semibold text-white mb-3 mt-5">
                             {children}
                           </h2>
                         ),
                         h3: ({children}) => (
                           <h3 className="text-lg font-medium text-white mb-2 mt-4">
                             {children}
                           </h3>
                         ),
                         p: ({children}) => (
                           <p className="text-gray-200 mb-3 leading-relaxed">
                             {children}
                           </p>
                         ),
                         ul: ({children}) => (
                           <ul className="list-disc pl-6 mb-3 text-gray-200 space-y-1">
                             {children}
                           </ul>
                         ),
                         ol: ({children}) => (
                           <ol className="list-decimal pl-6 mb-3 text-gray-200 space-y-1">
                             {children}
                           </ol>
                         ),
                         li: ({children}) => (
                           <li className="text-gray-200">
                             {children}
                           </li>
                         ),
                         blockquote: ({children}) => (
                           <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-800 rounded-r">
                             {children}
                           </blockquote>
                         ),
                         code: ({children, className, ...props}) => {
                           const isInline = !className;
                           return isInline ? (
                             <code className="bg-gray-700 text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono">
                               {children}
                             </code>
                           ) : (
                             <code className="block bg-gray-800 text-gray-200 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-600">
                               {children}
                             </code>
                           );
                         },
                         pre: ({children}) => (
                           <pre className="bg-gray-800 border border-gray-600 rounded-lg p-4 mb-4 overflow-x-auto">
                             {children}
                           </pre>
                         ),
                         strong: ({children}) => (
                           <strong className="font-semibold text-white">
                             {children}
                           </strong>
                         ),
                         em: ({children}) => (
                           <em className="italic text-gray-200">
                             {children}
                           </em>
                         ),
                         a: ({children, href}) => (
                           <a 
                             href={href} 
                             className="text-blue-400 hover:text-blue-300 underline"
                             target="_blank" 
                             rel="noopener noreferrer"
                           >
                             {children}
                           </a>
                         ),
                       }}
                     >
                       {message.content}
                     </ReactMarkdown>
                   </div>
                 )}
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
         <div className={`${messages.length === 0 ? 'mt-10' : ''} w-full`}>
           <InputTwo onNewMessage={handleNewMessage} />
         </div>
       </div>
       </>
    )
}
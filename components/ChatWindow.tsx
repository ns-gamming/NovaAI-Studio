
import React, { useState, useRef, useEffect } from 'react';
import type { Chat } from '@google/genai';
import { createChatSession, sendMessage } from '../services/geminiService';
import type { ChatMessage } from '../types';
import SendIcon from './icons/SendIcon';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am Nova, your AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSession.current = createChatSession();
  }, []);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatSession.current) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessage(chatSession.current, input);
      const modelMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', text: 'Sorry, something went wrong. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] flex flex-col bg-gray-900/80 backdrop-blur-md rounded-xl shadow-2xl shadow-nova-purple/20 border border-nova-purple/30 z-50 animate-fade-in-up">
      <header className="flex items-center justify-between p-4 border-b border-nova-purple/30">
        <h3 className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-nova-blue to-nova-purple">Nova AI Assistant</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
      </header>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-xs px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-nova-blue text-white' : 'bg-gray-700 text-gray-200'}`}>
              <p className="text-sm break-words">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex justify-start">
             <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
             </div>
           </div>
        )}
         <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-nova-purple/30 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nova anything..."
          className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-nova-blue transition-all duration-300"
          disabled={isLoading}
        />
        <button type="submit" className="ml-2 p-2 bg-nova-blue rounded-full text-white disabled:opacity-50 hover:shadow-glow-blue transition-all" disabled={isLoading || !input.trim()}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;


import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatIcon from './icons/ChatIcon';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-br from-nova-blue to-nova-purple text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-glow-blue transform hover:scale-110 transition-all duration-300"
          aria-label="Open chat"
        >
          <ChatIcon />
        </button>
      </div>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Chatbot;

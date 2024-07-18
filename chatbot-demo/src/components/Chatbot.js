// src/components/Chatbot.js
import React, { useState } from 'react';
import { ChatIcon } from '@heroicons/react/outline'; // Ensure you have Heroicons installed
import ChatWindow from './ChatWindow'; // Correct path

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-11 right-10 z-50">
     <button
        className="p-2 rounded-full bg-primary text-white hover:bg-secondary focus:outline-none"
        onClick={toggleChatbot}
      >
        <ChatIcon className="h-12 w-12" />
      </button>
      {isOpen && <ChatWindow onClose={toggleChatbot} />}
    </div>
      );
};

export default Chatbot;

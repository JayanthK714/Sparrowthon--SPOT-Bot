import React, { useState } from 'react';
import { generateContent } from '../services/GeminiService'; // Adjust path as per your project structure

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    const newMessage = { text: inputText, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');

    try {
      const response = await generateContent(inputText, 'gemini-1.5-flash-latest'); // Adjust model name as needed
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error generating content:', error.message);
      setMessages(prevMessages => [...prevMessages, { text: 'Error generating response, sorry.', sender: 'bot' }]);
    }
  };

  return (
    <div className="fixed bottom-16 right-4 z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* Chat window header */}
      <div className="bg-primary text-white px-4 py-2 rounded-t-lg">
        <p className="font-bold px-2">Spot</p>
      </div>

      {/* Chat messages */}
      <div className="p-12 max-h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
            <p className="p-2 rounded-lg inline-block bg-gray-100 shadow-sm">
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="flex items-center p-2 border-t border-gray-200">
        <input
          type="text"
          className="flex-1 mr-2 py-1 px-2 border border-gray-300 rounded-lg focus:outline-none"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-secondary text-white py-1 px-4 rounded-lg hover:bg-primary focus:outline-none"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>

      {/* Close button */}
      <button
        className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-800 focus:outline-none"
        onClick={onClose}
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ChatWindow;


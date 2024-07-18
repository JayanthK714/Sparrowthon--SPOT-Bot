// 

// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import './Home.css';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatOpen(!isChatOpen);
  };



  return (
    <div className="home-page bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img src="sparrow_icon.png" alt="Sparrow logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-indigo-500">Sparrow</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">About Us</a>
        </nav>
        <div className="flex space-x-4 items-center">
          <i className="far fa-thumbs-up"></i>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Download App</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className='flex'>
        <div className="w-1/2 flex flex-col justify-center items-start p-20 space-y-4">
          <i className="fas fa-cog fa-3x text-gray-500"></i>
          <h1 className="text-5xl font-bold leading-tight">
            Imagine an API tool with <span className="text-pink-500">Git Integration</span>
          </h1>
          <p className="text-xl">Our Beta Release is now <span className="text-blue-500">Live!</span></p>
          <p>Download the app now</p>
          <div className="space-y-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download for Windows
            </button>
            <p>or</p>
            <button className="bg-black border border-white hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center">
              <i className="fab fa-apple fa-lg mr-2"></i> Mac OS
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center p-20">
          <img src="random.png" alt="Screenshot of Sparrow app showing an API tool with Git integration" className="rounded-lg shadow-lg" />
        </div>
        </div>
        <div className=' bg-black'>
        <div className="scroll-content text-center p-20">
          <h1 className="text-3xl text-purple-300 mb-4">Sparrow</h1>
          <h2 className="text-4xl font-bold mb-4">Your All-in-One API Management Solution</h2>
          <p className="text-lg mb-8">
            Sparrow offers a complete set of tools that facilitate the entire API lifecycle, directing R&D teams toward excellence in API design-first development.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">Improved API Workflow</button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">API Workspace</button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Effortless Collaboration</button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Environment</button>
          </div>
          <div className="text-left mt-8">
            <h3 className="text-lg text-purple-300 mb-2">Improved API Workflow</h3>
            <p className="text-base">
              The Sparrow platform offers a wide range of tools to streamline every aspect of the API lifecycle, including design, development, testing, documentation, and sharing.
            </p>
          </div>
        </div>
        </div>
        <div className='bg-black'>
        <div className="max-w-screen-xl mx-auto py-20 px-4">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-purple-400">Simplifying</h1>
            <h2 className="text-5xl font-semibold">Complexity for All</h2>
            <p className="mt-4 text-gray-400 text-lg">A collaborative open-source solution for API development, streamlining the creation of exceptional APIs.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-users text-3xl text-white"></i>
                <h3 className="text-2xl font-semibold text-purple-400">Collaboration</h3>
              </div>
              <p className="mt-4 text-gray-400">By collaborations, developers can shift their development practices earlier in the process, leading to higher-quality APIs and faster development.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-terminal text-3xl text-white"></i>
                <h3 className="text-2xl font-semibold text-purple-400">Instant Testing Environment</h3>
              </div>
              <p className="mt-4 text-gray-400">Experience effortless parallel testing across diverse environments so you get the insights on the go.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-lock text-3xl text-white"></i>
                <h3 className="text-2xl font-semibold text-purple-400">Security</h3>
              </div>
              <p className="mt-4 text-gray-400">Sparrow offers powerful tools for securing and managing your API data along with self-hosting capabilities, providing users with complete control over their testing environment.</p>
            </div>
          </div>
        </div>
        </div>
        <div className=" bg-black">
          <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-bold mb-2">Join our Newsletter!</h2>
                <p className="text-gray-400">Get weekly updates on articles, news, product features and many more straight to your Inbox.</p>
              </div>
              <div className="flex mt-4 md:mt-0">
                <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md border border-gray-300 focus:outline-none" />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md">Subscribe</button>
              </div>
            </div>
            <div className="border-t border-gray-700 my-8"></div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-gray-200">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-200">Discord</a>
                <a href="#" className="text-gray-400 hover:text-gray-200">Github</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Have any questions?</span>
                <a href="mailto:contactus@sparrowapp.dev" className="text-blue-500 hover:underline">contactus@sparrowapp.dev</a>
              </div>
            </div>
            <div className="border-t border-gray-700 my-8"></div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img src="sparrow_icon.png" alt="Sparrow logo" className="mr-2" />
                <span className="font-bold text-xl">Sparrow</span>
              </div>
              <div className="text-gray-400 text-sm">
                <p>© 2024 Techdome Solutions Private Limited</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:underline">Terms of Service</a>
                  <a href="#" className="hover:underline">Privacy</a>
                  <a href="#" className="hover:underline">Blogs</a>
                  <a href="#" className="hover:underline">News</a>
                  <a href="#" className="hover:underline">Sitemap</a>
                  <a href="#" className="hover:underline">Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chatbot */}
      <Chatbot isOpen={isChatOpen} toggleChatbot={toggleChatbot} />
    </div>
  );
};

export default Home;



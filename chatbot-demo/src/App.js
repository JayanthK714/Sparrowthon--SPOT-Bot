// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Home from './components/Home'; // Dummy page
import ChatWindow from './components/ChatWindow';
import './styles/tailwind.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* Add more routes as needed */}
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;



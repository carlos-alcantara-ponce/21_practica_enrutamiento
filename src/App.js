import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";


import Home from './components/Home';


function App() {
  return (
    <div className="App bg-light p-3 text-center">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:string" element={<Home />} />
        <Route path="/:string/:fontColor/:backgColor" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;

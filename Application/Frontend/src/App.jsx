import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import PromptSubmitDashboard from './components/PromptSubmitDashboard';
import StaticPage from './components/Static';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import RatedPrompts from './components/RatedPrompts';
import All_prompts from './components/All_prompts';
import PromptsHistory from './components/PromptsHistory';
import HeaderBar from './components/HeaderBar';
import PromptRating from './components/PromptRating';


function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* <All_prompts /> */}
      <Header />
      <Sidebar />
      <Router>
        <Routes>

          <Route path="/" element={<Content />} />
          <Route path="/dashboard" element={<PromptSubmitDashboard />} />
          <Route path="/ratings" element={<RatedPrompts />} />
          <Route path="/piyush1" element={<All_prompts />} />
          <Route path="/piyush2" element={<PromptsHistory />} />
          <Route path="/piyush3" element={<HeaderBar />} />
          <Route path="/vishal" element={<PromptRating />} />
        </Routes>
      </Router>
    </div >
    // </BrowserRouter >
  );
}

export default App;


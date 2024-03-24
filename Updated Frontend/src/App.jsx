import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import QL from './components/QL/QL'

import Admin from "./components/Admin/Admin"
import Member from './components/Member/Member'
import Markdown from './components/Member/Markdown';
import Login from './components/Login/Login'
import Review from './components/QL/Review';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Member />} />
        <Route path="/editor" element={<Member />} />
        <Route path="/dashboard" element={<Member />} />
        <Route path="/review" element={<Review />} />
        <Route path="/prompt-history" element={<QL />} />
        <Route path="/ql" element={<QL />} />
        <Route path="/markdown" element={<Markdown />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  )
}



export default App

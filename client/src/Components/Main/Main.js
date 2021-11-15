import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './Main.css'
import Ask from './Ask/Ask';
import Saved from './Saved/Saved';
import About from './About/About';

export default function Main({ setQuestion, answers, question }) {
  return (
      <main className="root__main">
        <Routes>
          <Route path='/' element={<Ask setQuestion={setQuestion} answers={answers} question={question} />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main >
  )
}

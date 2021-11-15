import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState('');

  const fetchAndSetAnswers = async () => {
    axios({
      method: 'get',
      url: 'http://jp-wolfie-api.herokuapp.com/api',
      params: { question }
    }).then(res => {
      setQuestion('');
      setAnswers(res.data);
    }).catch(err => console.log(err.message));
  }

  if (question) {
    fetchAndSetAnswers();
  }

  return (
    <Router>
      <Header />
      <Main setQuestion={setQuestion} answers={answers} question={question} />
      <Footer />
    </Router>
  );
}

export default App;

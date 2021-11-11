import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState({});

  const fetchAndSetAnswers = async () => {
    axios({
      method: 'get',
      url: 'http://localhost:8008/api',
      params: { question }
    })
      .then(res => setAnswers(res.data))
      .catch(err => console.log(err.message));
  }

  if (question) {
    fetchAndSetAnswers();
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

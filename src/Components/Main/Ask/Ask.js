import React from 'react';
import Form from './Form/Form';
import Answer from './Answer/Answer';
import './Ask.css';

export default function Ask({answers, setQuestion, question}) {
  return (
    <>
      <Form setQuestion={setQuestion} />
      {question ? (<p>Let me think...</p>) : ('')}
      <Answer answers={answers} question={question} />
    </>
  )
}

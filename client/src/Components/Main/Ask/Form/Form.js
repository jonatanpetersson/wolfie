import React from 'react';
import './Form.css';

export default function Form({ setQuestion }) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let inputField = document.querySelector('input');
    setQuestion(inputField.value);
    inputField.value = '';
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">What would you like to know?</h3>
      <div className="form-wrapper">
        <input className="form__input" type="text" />
        <input className="form__submit material-icons" type="submit" value="&#xe8b6;" />
      </div>
    </form>
  )
}
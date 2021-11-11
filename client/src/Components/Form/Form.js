import React from 'react'

export default function Form({ setQuestion }) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuestion(ev.target.firstChild.value);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" />
      <input type="submit" value="Ask"/>
    </form>
  )
}

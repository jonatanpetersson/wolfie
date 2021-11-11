import React from 'react'

export default function Ask() {
  return (
    <div className="App">
      <h1>Wolfie</h1>
      <Form setQuestion={setQuestion} />
      <h2>Wolfram says:</h2>
      <p>{answers.wolfData}</p>
      <h2>Wikipedia says:</h2>
      <p>{answers.wikiData}</p>
    </div>
  )
}

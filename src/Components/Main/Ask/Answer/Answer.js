import React from 'react';
import './Answer.css'

export default function Answer({ answers, question }) {

  const expandAnswer = () => {
    // const answerCard = document.querySelector('.answer');
    const wikiAnswers = document.querySelectorAll('.wikiAnswer');
    wikiAnswers.forEach(wikiAnswer => {
      if (wikiAnswer && wikiAnswer.classList.contains('hidden')) {
        wikiAnswer.classList.remove('hidden');
      } else {
        wikiAnswer.classList.add('hidden');
      }
    })
  }

  const copy = () => navigator.clipboard.writeText(answers.wolfData);
  const save = () => {

  }

  return (
    <article className={answers && !question ? "answer" : "hidden"}>
      <div className="answer__wolf-wrapper">
        <div className="answer__text-wrapper">
          {answers && !question ? (<p className="answer__question"><i>{answers.question}</i></p>) : ('')}
          {answers && !question ? (<p>- {answers.wolfData}</p>) : ('')}
        </div>
        <div className="answer__button-wrapper">
          {/* {answers && !question ? (<button className="answer__save material-icons" onClick={save}>&#xe598;</button>) : ('')} */}
          {answers && !question ? (<button className="answer__copy material-icons" onClick={copy}>&#xe14d;</button>) : ('')}
          {answers.wikiSummary && !question ? (<button className="answer__expand material-icons" onClick={expandAnswer}>&#xe94f;</button>) : ('')}
        </div>
      </div>
      <div className="answer__wiki-wrapper">
        {answers.wikiSummary ? (<p className="wikiAnswer answer__wiki hidden">{answers.wikiSummary}</p>) : ('')}
        {answers.wikiImage ? (<img className="wikiAnswer answer__img hidden" src={answers.wikiImage} alt={answers.wikiTitle ? answers.wikiTitle : 'Wikipedia Image'} />) : ('')}
        {answers.wikiUrl ? (<a className="wikiAnswer answer__link material-icons hidden" target="_blank" rel="noreferrer" href={answers.wikiUrl}>&#xe89e;</a>) : ('')}
      </div>
    </article>
  )

    // return (
  //   <article className={answers && !question ? "answer" : "hidden"}>
  //     {answers && !question ? (<p>Q: {answers.question}</p>) : ('')}
  //     <div className="answer__wolf-wrapper">
  //     {answers && !question ? (<p>A: {answers.wolfData}</p>) : ('')}
  //     {answers && !question ? (<button className="answer__copy material-icons" onClick={copy}>&#xe14d;</button>) : ('')}
  //     </div>
  //     <div className="answer__expand-wrapper">
  //     {answers.wikiSummary && !question ? (<button className="answer__expand material-icons" onClick={expandAnswer}>&#xe94f;</button>) : ('')}
  //     </div>
  //     {answers.wikiSummary ? (<p className="wikiAnswer hidden">{answers.wikiSummary}</p>) : ('')}
  //     {answers.wikiUrl ? (<a className="wikiAnswer hidden" target="_blank" rel="noreferrer" href={answers.wikiUrl}>Go to Wikipedia article</a>) : ('')}
  //     {answers.wikiImage ? (<img className="wikiAnswer answer__img hidden" src={answers.wikiImage} alt={answers.wikiTitle ? answers.wikiTitle : 'Wikipedia Image'} />) : ('')}
  //   </article>
  // )
}

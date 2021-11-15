import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="about">
     <h2 className="about__title">About</h2>
     <p className="about__paragraph">Wolfie is aiming to give you the most consise but factual answer to any question, with the option of reading more on the topic of your choice from different resources.</p>
     <p className="about__paragraph">As its name hints at, Wolfie is powered by WolframAlpha's computational knowledge engine and can answer questions on most topics. It's especially good at mathematics if you really want to try its limits. Currently, for additional information, the Wikipedia API provides a summary if it holds an article on the searched topic.</p>
     <p className="about__paragraph">Wolfie is created by <a href="https://github.com/jonatanpetersson">Jonatan Petersson</a> during the hack days of the &lt;/salt&gt; full stack javascript training program of fall 2021. </p>
    </section>
  )
}

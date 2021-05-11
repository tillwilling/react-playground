import * as React from 'react'
import './Card.css'

export default ({ question, answer, active, id }) => {
  return (
    <section className="Card" id={id}>
      <h2>{question}</h2>
      <p>{answer}</p>
      <div className={active ? 'bookmark active' : 'bookmark'}></div>
    </section>
  )
}

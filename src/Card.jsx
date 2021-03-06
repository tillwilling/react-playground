import * as React from 'react'
import './Card.css'

export default ({ question, answer, active, tags, id }) => {
  return (
    <section className="Card">
      <h2>{question}</h2>
      <p>{answer}</p>
      <div className={active ? 'bookmark active' : 'bookmark'}></div>
      <ul className="Tags">
        {tags.map(tags => (
          <li key={tags}>{tags}</li>
        ))}
      </ul>
    </section>
  )
}

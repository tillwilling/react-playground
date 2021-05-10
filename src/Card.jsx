import * as React from 'react'
import './Card.css'

export default ({ active }) => {
  return (
    <section className="Card">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit.</p>
      <div className={active ? 'bookmark active' : 'bookmark'}></div>
    </section>
  )
}

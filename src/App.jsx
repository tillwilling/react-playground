import * as React from 'react'
import Card from './Card'

const quiz = [
  {
    question: 'Wie hieß das erste Computerspiel?',
    answer: 'Spacewar!',
    active: false,
    id: 1,
  },
  {
    question: 'Wann wurde das erste Computerspiel erfunden?',
    answer: '1961',
    active: true,
    id: 2,
  },
]

export default () => {
  return (
    <div>
      {quiz.map(({ question, answer, active, id }) => (
        <Card question={question} answer={answer} active={active} id={id} />
      ))}
    </div>
  )
}

import * as React from 'react'
import Card from './Card'

const quiz = [
  {
    question: 'Wie hieß das erste Computerspiel?',
    answer: 'Spacewar!',
    active: false,
    tags: ['Computer', 'Games', 'Retro', 'Entertainment'],
    id: 1,
  },
  {
    question: 'Wann wurde das erste Computerspiel erfunden?',
    answer: '1961',
    active: true,
    tags: ['Computer', 'Games', 'Retro', 'Entertainment'],
    id: 2,
  },
]

export default () => {
  return (
    <div>
      {quiz.map(({ question, answer, active, tags, id }) => (
        <Card question={question} answer={answer} active={active} tags={tags} />
      ))}
    </div>
  )
}

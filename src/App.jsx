import * as React from 'react'
import Card from './Card'

export default () => {
  return (
    <div>
      <Card active={false} />
      <Card active={true} />
    </div>
  )
}

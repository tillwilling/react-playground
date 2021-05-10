import * as React from 'react'
import Button from './Pagination'

export default () => {
  return (
    <div>
      <Button isActive={true}>Active</Button>
      <p>1/34</p>
      <Button isActive={false}>Not active</Button>
    </div>
  )
}

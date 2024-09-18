import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div>
    <h1>Child Component</h1>
    <GrandChild />
  </div>
  )
}

export default Child
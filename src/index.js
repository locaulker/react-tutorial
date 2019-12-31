import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

const btnText = 'Big Button'

function Person() {
  const btn = 'Search Button'
  const name = 'John'
  const lastName = 'Doe'

  return (
    <section>
      <button>{btnText}</button>
      <h2>{name + ' ' + lastName}</h2>
      <h2>{`${name} ${lastName}`}</h2>
      <p>info</p>
    </section>
  )
}


ReactDOM.render(<Person />, document.querySelector('#root'))
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  )
}

const CoverImage = () => (
<img 
  width="200"
  src="https://images-na.ssl-images-amazon.com/images/I/51cHCkvvKiL._SY498_BO1,204,203,200_.jpg" alt="Wonkey Donkey"/>
)

const Title = () => <h1 style={{fontSize: '2rem', color: 'red', fontWeight: '300'}}>The Wonkey Donkey</h1>

const authorStyle = {
  letterSpacing: '10px',
  color: 'green'
}
const Author = () => <p style={authorStyle}>by Craige Smith</p>

ReactDOM.render(<Books />, document.querySelector('#root'))
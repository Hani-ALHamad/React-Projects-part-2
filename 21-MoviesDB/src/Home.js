import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
const Home = () => {
  return (
    <div className="home">
      <h2>Search Movies</h2>
      <Form />
      <Movies />
    </div>
  )
}

export default Home

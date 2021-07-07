import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
function App() {
  return (
    <main>
      <div id="container">
        <h2>Search Hacker News</h2>
        <SearchForm />
        <Buttons />
        <Stories />
      </div>
    </main>
  )
}

export default App

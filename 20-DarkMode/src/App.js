import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const root = document.querySelector(':root').style
const dark = window.localStorage.getItem("dark")

function App() {
  const [isDark, changeIsDark] = useState(JSON.parse(dark))
  useEffect(() => {
    if(isDark){
      window.localStorage.setItem("dark", true)
      root.setProperty('--clr-bcg', '#282c35')
      root.setProperty('--clr-font', 'white')
      root.setProperty('--clr-primary', '#ffa7c4')
    } else {
      window.localStorage.setItem("dark", false)
      root.setProperty('--clr-bcg', 'white')
      root.setProperty('--clr-font', '#282c35')
      root.setProperty('--clr-primary', '#d23669')
    }

  },[isDark])

  return (
    <main>
      <nav>
        <h2>Overreacted</h2>
        <button onClick={() => changeIsDark(!isDark)}>Toggle</button>
      </nav>
      <div id="articles">
        {data.map((item) => (
          <Article key={item.id} item={item}/>
        ))}
      </div>
    </main>
  )
}

export default App

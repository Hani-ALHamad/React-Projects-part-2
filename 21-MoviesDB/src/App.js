import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="*">
          <span style={{textAlign:"center"}}>
            <h2>404</h2>
            <p>The page you are looking for cannot be found.</p>
          </span>
        </Route>
      </Switch>
    </main>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeParallax from './components/homeParallax/HomeParallax'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <main>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={HomeParallax} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App

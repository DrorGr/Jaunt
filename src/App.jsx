import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { StayDetails } from './pages/StayDetails'
import { StayApp } from './pages/StayApp'


export function App() {
  return (
    <div className="app">
      <Router>
        <main className="main-container">
          <Switch>
            <Route path="/stay/:id" component={StayDetails} />
            <Route path="/stay" component={StayApp} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          &copy; Copy Rights 2021
        </footer>
      </Router>
    </div>
  )
}


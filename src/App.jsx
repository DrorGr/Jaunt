import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { StayDetails } from './pages/StayDetails'
import { Explore } from './pages/Explore'
import { Header } from './cmps/Header'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main className="flex justify-center">
          <Switch>
            <Route path="/stay/:id" component={StayDetails} />
            <Route path="/stay" component={Explore} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/chat" component={Chat} />
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


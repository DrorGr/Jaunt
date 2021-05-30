import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { StayDetails } from './pages/StayDetails'
import { Header } from './cmps/Header'
import { StayApp } from './pages/StayApp'


export function App() {
  return (
    <div className="app">
      <Router>
<<<<<<< HEAD
        <header className="main-container">
        <Header></Header>
        </header>
        <main className="main-container">
=======
        <Header/>
        <main className="flex justify-center">
>>>>>>> 9fa34567af940ea6dc913b7c682ead6638b68d3b
          <Switch>
            <Route path="/stay/:id" component={StayDetails} />
            <Route path="/stay" component={StayApp} />
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


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
import { Link } from 'react-router-dom'
import { Hero } from '../cmps/Hero.jsx'
import { Nearby } from '../cmps/Nearby'
import { Anywhere } from '../cmps/Anywhere'
import { GetInspired } from '../cmps/GetInspired'

class _Home extends Component {

  render() {
    return (
      <div className="home">
        <Hero />
        <section className="explore-nearby main-container">
          <h1>Explore nearby</h1>
          <Nearby />
          <section className="live-anywhere-constainer">
            <h1>Live anywhere</h1>
            <Anywhere />
          </section>
          <Link to={`/stay`}>
            <section className="getInspired-container">
              <GetInspired />
            </section>
          </Link>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stayModule.stays
  }
}
const mapDispatchToProps = {
  loadStays
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)

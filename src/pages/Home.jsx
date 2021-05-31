import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
import { StayFilter } from '../cmps/StayFilter'
import { Hero } from '../cmps/Hero.jsx'



class _Home extends Component {

  render() {
    return (
      <div className="home">
        <section>
        <Hero/>
        </section>
        <section className="explore-nearby  main-container">
          <h2>Explore nearby</h2>
          <section className="grid">
            <div className="flex">
              <img src="../assets/img/1.jpg" alt="tel-aviv-yafo" />
              <div>
                <span>Tel Aviv-Yafo</span>
                <span>15 minute drive</span>
              </div>
            </div>
            <div className="flex">
              <img src="../assets/img/2.jpg" alt="netanya" />
              <div>
                <span>Netanya</span>
                <span>45 minute drive</span>
              </div>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <span>Jerusalem</span>
                <span>1 hour drive</span>
              </div>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <span>Eilat</span>
                <span>5 hour drive</span>
              </div>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <span>Haifa</span>
                <span>1.5 hour drive</span>
              </div>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <span>Herzeliya</span>
                <span>30 minute drive</span>
              </div>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <span>Herzeliya</span>
                <span>30 minute drive</span>
              </div>
            </div>
          </section>
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

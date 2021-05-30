import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
import {StayFilter}  from '../cmps/StayFilter'


class _Home extends Component {

  componentDidMount() {
    this.props.loadStays()
  }

  setUrl = (loc) => {
    this.props.history.push(`/stay?loc=${loc}`)
  }

  render() {
    return (
      <section className="search-container flex justify-center">
        <StayFilter setUrl={this.setUrl} />
      </section>

    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stayModule.stays
  }
}
const mapDispatchToProps = {
  loadStays,
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)

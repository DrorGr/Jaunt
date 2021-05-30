import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
// import { loadUsers } from '../store/actions/userActions.js'
import { StayFilter } from '../cmps/StayFilter'
import { StayApp } from './StayApp'
import { StayList } from '../cmps/StayList'
import { Route, Switch } from 'react-router'

class _Home extends Component {


  componentDidMount() {
    this.props.loadStays()
    // this.props.loadUsers()
  }

  setUrl = (loc) => {
    this.props.history.push(`/stay?loc=${loc}`)
  }

  render() {
    const { stays } = this.props
    return (
      <section className="search-container">
        <StayFilter setUrl={this.setUrl} />
        {/* <Switch>
          <Route component={StayFilter} path="/" />
        </Switch> */}
      </section>

    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stayModule.stays,
    // users: state.userModule.users,
    // loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  loadStays,
  // loadUsers,
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)

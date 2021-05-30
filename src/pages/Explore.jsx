import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
// import { loadUsers } from '../store/actions/userActions.js'
import { StayList } from '../cmps/StayList'
import { Route } from 'react-router'

class _Explore extends Component {


  componentDidMount() {
    this.props.loadStays()
    // this.props.loadUsers()
  }

  // handleChange = ev => {
  //   const { name, value } = ev.target
  //   this.setState(prevState => ({
  //     reviewToEdit: {
  //       ...prevState.reviewToEdit,
  //       [name]: value
  //     }
  //   }))
  // }

  


  render() {
    return (
      <section className="explore-container">
          <Route component={StayList} path="/explore" />
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

export const Explore = connect(mapStateToProps, mapDispatchToProps)(_Explore)

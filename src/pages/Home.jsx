import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
// import { loadUsers } from '../store/actions/userActions.js'
import { StayFilter } from '../cmps/StayFilter'
import { StayList } from '../cmps/StayList'
import { Link } from 'react-router-dom'

class _Home extends Component {


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



  // canRemove = review =>
  //   (review.byUser._id === this.props.loggedInUser?._id || this.props.loggedInUser?.isAdmin)

  render() {
   const {stays} = this.props
    return (
      <section className="search-container">
        <StayFilter />
        <StayList stays={stays}/>
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

import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class _Header extends Component {
    render() {
        const { loggedInUser } = this.props;
        return <header className="flex column">
            <section className="flex space-between align-center">
                <div className="logo-container flex space-between">
                    <NavLink exact to="/">
                        <i className="fab fa-airbnb fs34"></i>
                        <span className="fs30" role="img" aria-label="logo">jaunt</span>
                    </NavLink>
                </div>
                {/* <nav>
                experience
            </nav> */}
                <section className="header-nav flex fs14">
                    <NavLink to="/stay" >Explore</NavLink>
                    <div>Become a Host</div>
                    <NavLink to="/login">
                        <button className="login-btn flex space-between align-center">
                            <i className="fas fa-bars fs18"></i>
                            <i className="fas fa-user-circle fs28"></i>
                        </button>
                    </NavLink>
                    {loggedInUser && <span className="loggedin-user">
                        <Link to={`user/${loggedInUser._id}`}>
                            {loggedInUser.fullname}
                        </Link>
                    </span>}
                </section>
            </section>

                {/* <section className="search-container hero flex justify-center">
                    {<div>
                        <StayFilter />
                    </div>}
                </section> */}

        </header>
    }

}
const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)
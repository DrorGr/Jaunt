import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class _Header extends Component {
    render() {
        const { loggedInUser } = this.props;
        return <header className="main-header flex align-center">
            <div>
                <NavLink exact to="/"><span className="fs30" role="img" aria-label="logo">Jaunt</span></NavLink>
            </div>
            {/* <nav>
                experience
            </nav> */}
            <section className="header-nav flex ">
                <div>explore</div>
                <div>become a host</div>
                <NavLink to="/login">Login</NavLink>
                {loggedInUser && <span className="loggedin-user">
                    <Link to={`user/${loggedInUser._id}`}>
                        {loggedInUser.fullname}
                    </Link>
                    <span>{loggedInUser.score || 0}</span>
                </span>}
            </section>
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
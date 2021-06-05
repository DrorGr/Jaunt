import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserModal } from './UserModal';

class _Header extends Component {
    state = {
        isUserModalShown: false
    }

    toggleUserModal(){
        const { isUserModalShown } = this.state
        this.setState({isUserModalShown: !isUserModalShown})
    }
    
    render() {
        const { loggedInUser } = this.props;
        const {isUserModalShown} = this.state
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
                    {/* <NavLink to="/login"> */}
                        <button className="login-btn flex space-between align-center" onClick={()=>{this.toggleUserModal()}}>
                            <i className="fas fa-bars fs18"></i>
                            <i className="fas fa-user-circle fs28"></i>
                        </button>
                    {/* </NavLink> */}
                    <div className="user-container">
                        {loggedInUser && <span className="loggedin-user">
                            <Link to={`user/${loggedInUser._id}`}>
                                {loggedInUser.fullname}
                            </Link>
                        </span>}
                        {isUserModalShown && <UserModal />}
                    </div>
                </section>
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
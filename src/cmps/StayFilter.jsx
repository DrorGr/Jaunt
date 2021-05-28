import { Component } from 'react'
import { loadStays } from '../store/actions/stayActions.js'
// import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'

class _StayFilter extends Component {

    state = {
        filterBy: ''
    }
    onSetFilter = (filterBy) => {
        this.props.loadStays(filterBy)
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        const { filterBy } = this.state
        this.setState({ filterBy: { ...filterBy, [name]: value } }, () => {
            const { filterBy } = this.state
            this.onSetFilter(filterBy)
        })
    }

    render() {
        return (
            <section className="stay-filter">
                <div className="location-input">
                    <div>Location</div>
                    <input type="text" name="search" placeholder="Where are you going ?" onChange={this.handleChange} />
                </div>
                <div className="checkIn-input">
                    <div>Check in</div>
                    <input type="date" name="check-in" />
                </div>
                <div className="checkOut-input">
                    <div>Check out</div>
                    <input type="date" name="check-out" />
                </div>
                <div className="guests-input">
                    <div>Guests</div>
                    <input type="number" name="guests" min="0" />
                </div>
                <div className="search-btn" >Search  Icon</div>
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

export const StayFilter = connect(mapStateToProps, mapDispatchToProps)(_StayFilter)

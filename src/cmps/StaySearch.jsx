import { Component } from 'react'
import { loadStays } from '../store/actions/stayActions.js'
// import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'

class _StaySearch extends Component {

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
            <div className="stay-filter">
               <input type="text" name="search" placeholder="Where are you going ?" onChange={this.handleChange}/>
            </div>
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

export const StaySearch = connect(mapStateToProps, mapDispatchToProps)(_StaySearch)

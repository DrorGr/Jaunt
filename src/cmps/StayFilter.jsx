import { Component, useState } from 'react'
import { loadStays } from '../store/actions/stayActions.js'
// import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class _StayFilter extends Component {

    state = {
        filterBy: '',
        startDate: null,
        endDate: null
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
    setDates = (dates) => {
        const [start, end] = dates;
        this.setState({
            startDate: start,
            endDate: end
        })
    }


    render() {
        return (
            <section className="stay-filter flex justify-center align-center">
                <input type="text" name="search" placeholder="Where are you going ?" onChange={this.handleChange} />
                <DatePicker
                    className="date-picker"
                    placeholderText="Choose dates"
                    selected={this.state.startDate}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={date => this.setDates(date)}
                    monthsShown={2}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    selectsRange
                    shouldCloseOnSelect={false}
                />
                <input type="number" name="guests" min="0" placeholder="guests" />
                <button className="search-btn" >Search</button>
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

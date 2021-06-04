import { render } from '@testing-library/react';
import { Component } from 'react'
// import { loadStays } from '../store/actions/stayActions.js'
// import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from 'react-router';
import { GuestModal } from './GuestModal';
class _StayFilter extends Component {

    state = {
        filterBy: {
            location: '',
        },
        isModalShown: false,
        startDate: '',
        endDate: '',
        // guestAmount: { adults: 0, children: 0, infants: 0 },
        x: 0,
        y: 0
    }

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        const { filterBy } = this.state
        this.setState({
            filterBy: { ...filterBy, [name]: value },
            [name]: value,
            [name]: value
        }
        )
    }

    setDates = (dates) => {
        const [start, end] = dates;
        this.setState({
            startDate: start,
            endDate: end
        })
    }

    toggleModal = () => {
        const { isModalShown } = this.state
        this.setState({ isModalShown: !isModalShown })
    }

    updateGuestsAmount = (key, num, ev) => {
        // need to handle case when num is < 0
        ev.stopPropagation();
        ev.preventDefault();
        switch (key) {
            case 'adults': this.setState({ key: num })
                break
            case 'children': this.setState({ key: num })
                break
            case 'infants': this.setState({ key: num })
                break
            default:
        }
    }

    updateGuestsAmount = (typeOfGuest, diff, ev) => {
        // need to handle case when num is < 0
        ev.stopPropagation();
        ev.preventDefault();
        const updatedOrder = { ...this.props.order }
        updatedOrder.guestAmount[typeOfGuest] += diff
        this.props.setGuestAmount(updatedOrder)
    }

    setDates = (dates) => {
        const [startDate, endDate] = dates;
        const updatedOrder = { ...this.props.order }
        this.state.startDate = startDate
        this.state.endDate = endDate
        this.props.setDates(updatedOrder)
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { location } = this.state
        this.props.history.push(`/stay?loc=${location}`)
    }

    render() {
        const { guestAmount } = this.props.order
        const { startDate, endDate, isModalShown, x, y, filterBy } = this.state
        const style = { backgroundPosition: `calc((100 - ${x}) * 1%) calc((100 - ${y}) * 1%)` }

        return (
            <form className="stay-filter flex justify-center align-center" >
                <div>
                    <div className="location">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="Where are you going?" value={filterBy.location} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="tiny-border"></div>
                <div className="date-picker">
                    Dates
                    <DatePicker
                        placeholderText="Choose dates"
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => this.setDates(date)}
                        monthsShown={2}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        selectsRange
                        shouldCloseOnSelect={true}
                    />
                </div>
                <div className="tiny-border"></div>
                <div className="guests flex column" onClick={(ev) => this.toggleModal()}>
                    <label htmlFor="guestAmount">Guests</label>
                    {(guestAmount.adults + guestAmount.children + guestAmount.infants) <= 0 ?
                        <span>Add guests</span> :
                        <span>{guestAmount.adults + guestAmount.children + guestAmount.infants} guests</span>
                    }
                    <div className="guest-modal">
                        <GuestModal isModalShown={isModalShown} guestAmount={guestAmount} updateGuestsAmount={this.updateGuestsAmount} />
                    </div>
                </div>
                <button onMouseMove={this.handleMouseMove}
                    className="search-btn"
                    onClick={this.onSubmit}
                    style={style}
                >
                    <i className="fas fa-search search-icon"></i>
                </button>
            </form>
        )
    }

}
export const StayFilter = withRouter(_StayFilter)


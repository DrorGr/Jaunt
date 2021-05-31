import { Component } from 'react'
// import { loadStays } from '../store/actions/stayActions.js'
// import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from 'react-router';


class _StayFilter extends Component {

    state = {
        filterBy: {
            location: '',
        },
        startDate: '',
        endDate: '',
        guetsAmount: ''
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

    onSubmit = (ev) => {
        ev.preventDefault()
        const { location } = this.state
        this.props.history.push(`/stay?loc=${location}`)
    }


    render() {
        const { location, startDate, endDate, guetsAmount } = this.state
        return (
            <form className="stay-filter flex justify-center align-center" >
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="Where are you going?" value={location} onChange={this.handleChange} required />
                </div>
                <div>
                    Dates
                    <DatePicker
                        className="date-picker"
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
                <div>
                    <label htmlFor="guetsAmount">Guests</label>
                    <input type="number" name="guetsAmount" min="1" placeholder="guests" value={guetsAmount} onChange={this.handleChange} required />
                </div>
                <button className="search-btn" onClick={this.onSubmit}><i className="fas fa-search search-icon"></i></button>
            </form>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         stays: state.stayModule.stays
//     }
// }
// const mapDispatchToProps = {
//     loadStays
// }
// const StayFilterWithRouter = withRouter(StayFilter);
// export default withRouter(_StayFilter)
// export const StayFilter = connect(mapStateToProps, mapDispatchToProps)(_StayFilter)
export const StayFilter = withRouter(_StayFilter)


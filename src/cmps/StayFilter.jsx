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
        guetsAmount: { adults: 0, children: 0, infants: 0 },
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

    updateGuestsAmount = (key, num) => {
        // need to handle case when num is < 0

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

    onSubmit = (ev) => {
        ev.preventDefault()
        const { location } = this.state
        this.props.history.push(`/stay?loc=${location}`)
    }


    render() {
        const { location, isModalShown, startDate, endDate, guetsAmount } = this.state
        const { x, y } = this.state
        const style = { backgroundPosition: `calc((100 - ${x}) * 1%) calc((100 - ${y}) * 1%)` }
        return (
            <form className="stay-filter flex justify-center align-center" >
                <div className="location">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Where are you going?" value={location} onChange={this.handleChange} />
                </div>
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

                <div className="guests flex column" onClick={this.toggleModal}>
                    <label htmlFor="guetsAmount">Guests</label>
                    {/* <input type="number" name="guetsAmount" id="guestsAmount" min="1" placeholder="Guests" value={guetsAmount} onChange={this.handleChange} onClick={this.toggleModal} /> */}
                    {(guetsAmount.adults || guetsAmount.children || guetsAmount.infants) > 0 &&
                    <span>{guetsAmount.adults + guetsAmount.children + guetsAmount.infants} guests</span>
                    }
                    <div className="guest-modal">
                        <GuestModal isModalShown={isModalShown} guetsAmount={guetsAmount} updateGuestsAmount={this.updateGuestsAmount} />
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


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../cmps/NavBar'
import { StayMap } from '../cmps/StayMap'
import { SelectDates } from '../cmps/SelectDates'
import { Amenities } from '../cmps/Amenities'
import { Reviews } from '../cmps/Reviews'
import { StayMainInfo } from '../cmps/StayMainInfo.jsx'
import { setStay } from '../store/actions/stayActions'
import { setLocation, setDates, setGuestAmount } from '../store/actions/orderActions'
import { addOrder } from '../store/actions/userActions'
import { CheckAvailability } from '../cmps/CheckAvailability'
import { StayDesc } from '../cmps/StayDesc'


class _StayDetails extends Component {
  state = {
    startDate: '',
    endDate: '',
    isModalShown: false,
    isChargeShown: false,
    x: 0,
    y: 0
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  async componentDidMount() {
    this.props.setStay(this.props.match.params.id)
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    const { filterBy } = this.state
    this.setState({
      filterBy: { ...filterBy, [name]: value },
      [name]: value,
      [name]: value
    })
  }

  getAmenitiesIcons = (txt) => {
    switch (txt) {
      case 'TV': return 'fa fa-tv'
      case 'Wifi': return 'fa fa-wifi'
      case 'Kitchen': return 'fa fa-cutlery'
      case 'Smoking allowed': return 'fas fa-smoking'
      case 'Pets allowed': return 'fas fa-paw'
      case 'Parking': return 'fas fa-parking'
      case 'Room service': return 'fas fa-concierge-bell'
      case 'Transportation': return 'fas fa-bus'
      case 'Refrigerator': return 'fas fa-refrigerator'
      case 'Coffee': return 'fas fa-coffee'
      case 'Air conditioning': return 'fa fa-snowflake-o'
      case 'Air conditioning': return 'fa fa-snowflake-o'
      case 'Air conditioning': return 'fa fa-snowflake-o'
      default:
    }
  }

  toggleModal = () => {
    const { isModalShown } = this.state
    this.setState({ isModalShown: !isModalShown })
  }

  toggleCharge = () => {
    const updatedOrder = { ...this.props.order }
    updatedOrder.location = this.props.stay.loc.address
    // console.log('updatedOrder ', updatedOrder);
    this.props.setLocation(updatedOrder)
    // console.log('loc should be here ', this.props.order)
    // this.props.addOrder(this.props.order)
    const { isChargeShown } = this.state
    this.setState({ isChargeShown: !isChargeShown })
  }

  getGuestsNum = () => {
    const { adults, children, infants } = this.props.order.guestAmount
    return adults + children + infants
  }

  setDates = (dates) => {
    const [startDate, endDate] = dates;
    const updatedOrder = { ...this.props.order, startDate,endDate }
    this.state.startDate = startDate
    this.state.endDate = endDate
    this.props.setDates(updatedOrder)
}

  updateGuestsAmount = (typeOfGuest, diff, ev) => {
    // need to handle case when num is < 0
    ev.stopPropagation();
    ev.preventDefault();
    const updatedOrder = { ...this.props.order }
    updatedOrder.guestAmount[typeOfGuest] += diff
    this.props.setGuestAmount(updatedOrder)
  }

  render() {
    const { stay, order } = this.props
    const { startDate, endDate } = this.state
    if (!stay) return <div>loading</div>
    return (
      <section className="stay-details-container ">
        <NavBar order={order} setGuestAmount={this.props.setGuestAmount} setDates={this.props.setDates} startDate={startDate} endDate={endDate} />
        <section className="desc-page">
          <StayMainInfo stay={stay} />
          <section className="description flex">
            <div className="stay-description">
              <StayDesc stay={stay} />
              <section className="details-container">
                <h2>Amenities</h2>
                <Amenities amenities={stay.amenities} getAmenitiesIcons={this.getAmenitiesIcons} />
              </section>
              <hr />
              <section className="details-container">
                <h2>Select dates</h2>
                <SelectDates startDate={startDate} endDate={endDate} setDates={this.setDates} />
              </section>
            </div>
            <CheckAvailability state={this.state} props={this.props} getGuestsNum={this.getGuestsNum} toggleModal={this.toggleModal} toggleCharge={this.toggleCharge} updateGuestsAmount={this.updateGuestsAmount} handleMouseMove={this.handleMouseMove} setDates={this.setDates} />
          </section>
        </section>
        <hr />
        <Reviews reviews={stay.reviews} />
        <section className="map-container">
          <StayMap location={stay.loc} />
        </section>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    stay: state.stayModule.currStay,
    order: state.orderModule.currOrder,
    user: state.userModule.orders
  }
}
const mapDispatchToProps = {
  setStay,
  setLocation,
  setDates,
  setGuestAmount,
  addOrder
}

export const StayDetails = connect(mapStateToProps, mapDispatchToProps)(_StayDetails)
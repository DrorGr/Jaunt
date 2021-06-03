import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { stayService } from '../services/stayService'
import DatePicker from 'react-datepicker'
import { NavBar } from '../cmps/NavBar'
import { StayMap } from '../cmps/StayMap'
import { SelectDates } from '../cmps/SelectDates'
import { Amenities } from '../cmps/Amenities'
import { Reviews } from '../cmps/Reviews'
// import {Map} from '../cmps/Map'
import { GuestModal } from '../cmps/GuestModal';


export class StayDetails extends Component {
  state = {
    stay: null,
    isModalShown: false,
    isChargeShown:false,
    startDate: '',
    endDate: '',
    guestAmount: { adults: 0, children: 0, infants: 0 },
    review: {
      cleanliness: 5,
      accuracy: 5,
      communication: 5,
      location: 5,
      checkin: 5,
      value: 5,
      txt: ''
    },
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
    const stay = await stayService.getById(this.props.match.params.id)
    this.setState({ stay })
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

  getAmenitiesIcons = (txt) => {
    switch (txt) {
      case 'TV': return 'fa fa-tv'
      case 'Wifi': return 'fa fa-wifi'
      case 'Kitchen': return 'fa fa-cutlery'
      case 'Smoking allowed': return 'fas fa-smoking'
      case 'Pets allowed': return 'fas fa-paw'
      case 'Air conditioning': return 'fa fa-snowflake-o'
      default:
    }
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

toggleCharge = () => {
  const { isChargeShown } = this.state
  this.setState({ isChargeShown: !isChargeShown })
}

getGuestsNum = () => {
  const {adults,children,infants} = this.state.guestAmount
  return adults + children + infants
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

  render() {
    const { stay, location, startDate, endDate, guestAmount,isModalShown,isChargeShown, x, y } = this.state
    const style = { backgroundPosition: `calc((100 - ${x}) * 1%) calc((100 - ${y}) * 1%)` }
    if (!stay) return <div>loading</div>
    return (
      <section className="stay-details-container ">
        <NavBar />
        <section className="desc-page">

          <div className="details-title">
            <div className="title-primary fs24"><h1>{stay.name}</h1></div>
            <div className="title-secondery flex space-between">
              <div className="left flex space-between">
                <div className="stay-rate">
                  <i className='fa fa-star'></i>
                  <span>
                    {stay.reviews[0].rate}
                  </span>
                  {stay.reviews.length === 1 && <span className="reviews-amount"> ({stay.reviews.length} review)</span>}
                  {stay.reviews.length > 1 && <span className="reviews-amount">({stay.reviews.length} reviews)</span>}
                </div>
                <div><Link to={`/stay/?loc=${stay.loc.address}`}>{stay.loc.address}</Link></div>
              </div>
              <div className="right flex space-between">
                <div><i className='fa fa-share-square-o'></i>share</div>
                <div><i className='fa fa-heart-o'></i> save</div>
              </div>
            </div>
          </div>
          <div className="img-grid-container">
            {stay.imgUrls.map((img, idx) => <img src={img} alt="" key={idx} />)}
          </div>
          <section className="description-availability flex ">
            <div className="stay-description">
              <div className="details-container flex space-between">
                <div className="titles">
                  <h2>{`Entire apartment hosted by ${stay.host.fullname}`}</h2>
                  <p>{`${stay.capacity} guests `}</p>
                </div>
                <img className="host-img" src={stay.host.imgUrl} alt="profile" />
              </div>
              <hr />
              <section className="info-container details-container">
                <div className="info flex">
                  <i className="fas fa-home"></i>
                  <span>
                    <h4>Entire home</h4>
                    <p>You’ll have the apartment to yourself.</p>
                  </span>
                </div>
                <div className="info flex">
                  <i className="fas fa-hand-sparkles"></i>
                  <span>
                    <h4>Enhanced Clean</h4>
                    <p>This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                  </span>
                </div>
                {!stay.amenities.includes('Smoking allowed' || 'Pets allowed') &&
                  <div className="info flex">
                    <i className="fas fa-scroll"></i>
                    <span>
                      <h4>House rules</h4>
                      <p>The host doesn’t allow pets, parties, or smoking.</p>
                    </span>
                  </div>
                }
              </section>
              <hr />
              <div className="details-container">
                <p>{stay.summary}</p>
              </div>
              <hr />
              <section className="details-container">
                <h2>Amenities</h2>
                <Amenities amenities={stay.amenities} getAmenitiesIcons={this.getAmenitiesIcons} />
              </section>
              <hr />
              <section className="details-container">
                <h2>Select dates</h2>
                <SelectDates startDate={this.state.startDate} endDate={this.state.endDate} setDates={this.setDates} />
              </section>
            </div>
            <div className="availability flex column">
              <form className="check-availability flex column align-center">
                <div className="value-rate flex space-between">
                  <span><b className="fs22">${stay.price}</b> / night</span>
                  <span className="stay-rate flex">
                    <i className='fa fa-star'></i>
                    <span>{stay.reviews[0].rate}</span>
                    {stay.reviews.length === 1 && <span className="reviews-amount">({stay.reviews.length} review)</span>}
                    {stay.reviews.length > 1 && <span className="reviews-amount">({stay.reviews.length} reviews)</span>}
                  </span>
                </div>
                <div className="order-details details-container fs20 flex column align-center">
                  <DatePicker
                    className="date-picker"
                    placeholderText="Choose dates"
                    onChange={date => this.setDates(date)}
                    selected={startDate}
                    startDate={startDate}
                    endDate={endDate}
                    monthsShown={2}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    selectsRange
                    shouldCloseOnSelect={true}
                  />
                  {/* <div className="guests">Guests</div> */}
                  <div className="guests flex column" onClick={(ev) => this.toggleModal()}>
                    <label htmlFor="guestAmount">Guests</label>
                    {/* <input type="number" name="guestAmount" id="guestsAmount" min="1" placeholder="Guests" value={guestAmount} onChange={this.handleChange} onClick={this.toggleModal} /> */}
                    {(guestAmount.adults || guestAmount.children || guestAmount.infants) > 0 &&
                    <span>{this.getGuestsNum()} guests</span>
                    }
                    <div className="guest-modal">
                        <GuestModal isModalShown={isModalShown} guestAmount={guestAmount} updateGuestsAmount={this.updateGuestsAmount} />
                    </div>
                </div>
                </div>
                
                <button className="check-btn fs18"
                  onMouseMove={this.handleMouseMove}
                  style={style}
                  onClick={this.toggleCharge}>
                  {(!isChargeShown) ? 'Check Availability' : 'Reserve' }             
              </button> 
              {isChargeShown && 
              <div className="trip-reserve flex column">
                <p className="charge-msg">You won't be charged yet</p>
                <p>Non-refundable</p>
                <p>{this.getGuestsNum()} Guests</p>
                <p>$ {stay.price}</p>
                <p>Total</p>
              </div>
              }

              </form>
            </div>

          </section>
          <hr />
          <Reviews reviews={stay.reviews} />

          <div className="location-map">
            {/* <Map/> */}
          </div>
          <div className="host-details"></div>
        </section>
        <div className="host-details"></div>
        <section className="map-container">
          <StayMap location={stay.loc} />
        </section>
      </section>
    )
  }
}


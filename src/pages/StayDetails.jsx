import React, { Component } from 'react'
import { stayService } from '../services/stayService'
import DatePicker from 'react-datepicker'
import { NavBar } from '../cmps/NavBar'
import {SelectDates} from '../cmps/SelectDates'
// import {Map} from '../cmps/Map'


export class StayDetails extends Component {
  state = {
    stay: null,
    startDate: '',
    endDate: '',
    guetsAmount: ''
  }

  async componentDidMount() {
    const stay = await stayService.getById(this.props.match.params.id)
    console.log(this.props.match.params.id);
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

  amenitiesIcon = (txt) => {
    switch (txt) {
      case 'TV': return 'fa fa-tv'
        break;
      case 'Wifi': return 'fa fa-wifi'
        break;
      case 'Kitchen': return 'fa fa-cutlery'
        break;
      case 'Smoking allowed': return 'fas fa-smoking'
        break;
      case 'Pets allowed': return 'fas fa-paw'
        break;
      case 'Air conditioning': return 'fa fa-snowflake-o'
        break;
    }
  }

  setDates = (dates) => {
    const [start, end] = dates;
    this.setState({
      startDate: start,
      endDate: end
    })
  }

  render() {
    const { stay, location, startDate, endDate, guetsAmount } = this.state
    if (!stay) return <div>loading</div>
    console.log(stay);
    return (
      <section className="stay-details-container ">
        <NavBar />
        <div className="details-title">
          <div className="title-primary"><h3>{stay.name}</h3></div>
          <div className="title-secondery flex space-between">
            <div className="left flex space-between">
              <div><i className='fa fa-star'></i>{stay.reviews[0].rate}</div>
              <div>{stay.loc.address}</div>
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
            <div className="host-desc flex space-between">
              <div className="titles">
                <h5>{`Entire apartment hosted by ${stay.host.fullname}`}</h5>
                <p>{`${stay.capacity} guests `}</p>
              </div>
              <div className="host-img"><img src={stay.host.imgUrl} alt="profile" /></div>
            </div>
            <hr />
            <div className="txt-description">
              <p>{stay.summary}</p>
            </div>
            <hr />
            <div className="amenities">{stay.amenities.map((txt, idx) => <p key={idx}><i className={this.amenitiesIcon(txt)}></i> {txt}</p>)}</div>
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
                {/* <span><i class='fa fa-star'></i>{stay.reviews[0].rate} (reviews)</span> */}
              </div>

              <div className="order-details flex column align-center">
                {/* <div className="date-picker flex space-evenly">
                  <div className="check-in"><p>check in</p></div>
                  <div className="check-out"> <p>check out</p></div>
                </div> */}
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
                <div>Guests</div>
              </div>
            </form>
          </div>
        </section>
        {/* <SelectDates/> */}

        <section className="reviews">
          <div className="review-parameters"></div>
          <div className="review-users">
            <div className="review-img"></div>
            <p className="review-name">{stay.render}</p>
            <p className="review-date"></p>
          </div>
        </section>
        <div className="location-map">
          {/* <Map/> */}
        </div>
        <div className="host-details"></div>
      </section>
    )
  }
}


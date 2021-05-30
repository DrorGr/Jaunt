import React, { Component } from 'react'
import { stayService } from '../services/stayService'

export class StayDetails extends Component {
  state = {
    stay: null
  }
  async componentDidMount() {
    const stay = await stayService.getById(this.props.match.params.id)
    console.log(this.props.match.params.id);
    this.setState({ stay })

  }

  render() {
    const { stay } = this.state
    if (!stay) return <div>loading</div>
    console.log(stay);
    return (
      <section className="stay-details-container ">
        <div className="details-title">
          <div className="title-primary"><h3>{stay.name}</h3></div>
          <div className="title-secondery flex space-between">
            <div className="left flex space-between">
            <div><i class='fa fa-star'></i>{stay.reviews[0].rate}</div>
            <div>{stay.loc.address}</div>
            </div>
            <div className="right flex space-between">
            <div><i class='fa fa-share-square-o'></i>share</div>
            <div><i class='fa fa-heart-o'></i> save</div>
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
            {/* Temporary */}
            <div className="txt-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur recusandae accusantium quo fugit suscipit. Placeat architecto necessitatibus quo molestias nesciunt quisquam recusandae, in illo consequatur dignissimos fugiat neque fuga?</div>
            <div className="txt-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur recusandae accusantium quo fugit suscipit. Placeat architecto necessitatibus quo molestias nesciunt quisquam recusandae, in illo consequatur dignissimos fugiat neque fuga?</div>
            <div className="txt-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur recusandae accusantium quo fugit suscipit. Placeat architecto necessitatibus quo molestias nesciunt quisquam recusandae, in illo consequatur dignissimos fugiat neque fuga?</div>
            <hr />
            <div className="amenities">{stay.amenities.map((txt, idx) => <p key={idx}>{txt}</p>)}</div>
          </div>
          <div className="availability flex column">
          <form className="check-availability flex column center">
            <div className="value-rate flex space-between">
          <p className="price">{`$${stay.price} / night`}</p>
          <span><i class='fa fa-star'></i>{stay.reviews[0].rate} (reviews)</span>
            </div>
            <div className="order-details flex column align-center">
              <div className="date-picker">
                <input type="date" />
              </div>
            </div>
          </form>
          </div>
        </section>

        <section className="reviews">
          <div className="review-parameters"></div>
          <div className="review-users">
            <div className="review-img"></div>
            <p className="review-name">{stay.render}</p>
            <p className="review-date"></p>
          </div>
        </section>
        <div className="location-map"></div>
        <div className="host-details"></div>
      </section>
    )
  }
}


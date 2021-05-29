import React, { Component } from 'react'
import {stayService} from '../services/stayService'

export class StayDetails extends Component {
  state = {
    stay : null
  }
  async componentDidMount() {
    const stay = await stayService.getById(this.props.match.params.id)
    console.log(this.props.match.params.id); 
    this.setState({stay})

  }

  render() {
    const {stay} = this.state
    if (!stay) return <div>loading</div>
    console.log(stay); 
    return (
      <section className="stay-details-container">
        <div className="details-title">
          <div className="title-primary"><h3>{stay.name}</h3></div>
          <div className="title-secondery ">
             <span>{stay.reviews[0].rate}</span>
             <span>{stay.loc.address}</span>
             <span>Share</span>
             <span>Save</span>
            </div>
        </div>
        <div className="img-grid">
          {stay.imgUrls.map((img,idx) =>  <img src={img} alt="" key={idx}/>) } 
        </div>
        <section className="description-availability">
        <div className="stay-description">
          <div className="host-desc">
            <h5>{`Entire apartment hosted by ${stay.host.fullname}`}</h5>
            <span className="host-img"><img src={stay.host.imgUrl} alt="profile" /></span>
          </div>
            <hr />
            <div className="txt-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur recusandae accusantium quo fugit suscipit. Placeat architecto necessitatibus quo molestias nesciunt quisquam recusandae, in illo consequatur dignissimos fugiat neque fuga?</div>
            <hr />
            <div className="amenities">{stay.amenities.map((txt,idx) => <p key={idx}>{txt}</p> ) }</div>
        </div>
        <div className="availability">Add Search here!!!</div>
        </section>

        <section className="reviews">
          <div className="review-parameters"></div>
          <div className="review-users"></div>
        </section>
        <div className="location-map"></div>
        <div className="host-details"></div>
      </section>
    )
  }
}


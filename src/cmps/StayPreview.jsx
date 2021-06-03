import { ImgCarousel } from '../cmps/ImgCarousel'
import { Link } from 'react-router-dom'

export function StayPreview({ stay }) {
    const img = stay.imgUrls[0]
    return (
        <div>         
                <article className="stay-preview fs16">
                    <ImgCarousel stay={stay} />
            <Link to={`/stay/${stay._id}`} className="primary-btn">
                    <span className="stay-rate flex">
                        <i className='fa fa-star'></i>
                        <span>{stay.reviews[0].rate}</span>
                        {stay.reviews.length === 1 && <span className="reviews-amount">({stay.reviews.length} review)</span>}
                        {stay.reviews.length > 1 && <span className="reviews-amount">({stay.reviews.length} reviews)</span>}
                    </span>
                    <p className="stay-name">{stay.name} </p>
                    <p className="stay-summery">{`${stay.capacity} guests`} </p>
                    {/* <p className="stay-amenities">{`${stay.amenities.join(' • ')} `} </p> */}
                    <p className="stay-price">
                        <span><b>${stay.price}</b></span>
                        <span> / night</span>
                    </p>
                    <span className="save-btn"><i className='fa fa-heart-o'></i></span>
                    </Link>
                    {/* {(loggedInUser && loggedInUser.isHost) &&
                <div className="admin-actions">
                <Fab size="small" color="primary" aria-label="delete" onClick={() => onRemoveStay(stay._id)}>
                <DeleteIcon />
                </Fab>
                <Link to={`/stay/edit/${stay._id}`}>
                <Fab size="small" color="primary" aria-label="edit">
                <EditIcon />
                </Fab>
                </Link>
                </div>
            } */}
                </article>
        </div>
    )
}
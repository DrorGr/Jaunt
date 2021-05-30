import { Link } from 'react-router-dom'

export function StayPreview({ stay, onRemoveStay, loggedInUser }) {
    console.log('in preview ', stay);

    return (
        <Link to={`/stay/${stay._id}`} className="primary-btn">
            <article className="stay-preview">
                <img src={stay.imgUrls[0]} alt="" />
                <span className="stay-rate"><i class='fa fa-star'></i> {stay.reviews[0].rate} (rate)</span>
                <p className="stay-name">{stay.name} </p>
                <p className="stay-summery">{`${stay.capacity} guests`} </p>
                {/* <p className="stay-amenities">{`${stay.amenities.join(' • ')} `} </p> */}
                <p className="stay-price">{`$${stay.price} / night`}</p>
                <span className="save-btn"><i class='fa fa-heart-o'></i></span>
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
        </Link>

    )
}
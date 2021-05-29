import { Link } from 'react-router-dom'

export function StayPreview({ stay, onRemoveStay, loggedInUser }) {
    return (
        <article className="stay-preview">
            <img src={stay.imgUrls[0]} alt=""  />
            <p className="stay-rate">{stay.reviews[0].rate} (rate)</p>
            <p className="stay-name">{stay.name} </p>
            <p className="stay-summery">{`${stay.capacity} guests`} </p>
            <p className="stay-amenities">{`${stay.amenities.join(' • ')} `} </p>
            <p className="stay-price">{`$${stay.price} / night`}</p>
             <span className="wishlist">add an icon to top  image</span>
            <Link to={`/stay/${stay._id}`} className="primary-btn">Show details</Link>
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

    )
}
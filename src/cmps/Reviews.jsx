export function Reviews({ reviews }) {

    return (
        <section className="details-container">
            <div className="value-rate flex space-between">
                <span className="stay-rate flex">
                    <i className='fa fa-star'></i>
                    <span>{reviews[0].rate}</span>
                    {reviews.length === 1 && <span className="reviews-amount">({reviews.length} review)</span>}
                    {reviews.length > 1 && <span className="reviews-amount">({reviews.length} reviews)</span>}
                </span>
            </div>
            <div className="flex column">

                {reviews.map(review =>
                    <article key={review.id}>
                        <div className="review-by flex align-center">
                            <img className="host-img" src={review.by.imgUrl} />
                            <p className="review-name">{review.by.fullname}</p>
                            {/* <p className="review-date"></p> */}
                        </div>
                        <div className="review-parameters">
                            <p>Rate: {review.rate}</p>
                            <p className="review-txt">{review.txt}</p>
                        </div>
                    </article>
                )}
            </div>
        </section>

    )
}


{/* <section className="reviews">
        <div className="review-parameters"></div>
        <div className="review-users">
          <div className="review-img"></div> */}
{/* <p className="review-name">{reviews.by.fullname}</p> */ }
{/* <p className="review-date"></p>
        </div>
      </section> */}
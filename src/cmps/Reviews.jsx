export function Reviews({ reviews }) {

    return (
        <section>
            {reviews.map(review =>
                <article key={review.id}>
                    <div className="review-users">
                        <img className="host-img" src={review.by.imgUrl}/>
                        <p className="review-name">{review.by.fullname}</p>
                        {/* <p className="review-date"></p> */}
                        <div className="review-parameters"></div>
                        <p>Rate: {review.rate}</p>
                        <p className="review-txt">{review.txt}</p>
                    </div>
                </article>
            )}
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
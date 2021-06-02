import React from 'react';
// import ReactDOM from 'react-dom';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

export function Reviews({ reviews }) {

    return (
        <section className="reviews-container details-container">
            <div className="value-rate flex space-between">
                <span className="stay-rate flex">
                    <i className='fa fa-star'></i>
                    <span>{reviews[0].rate}</span>
                    {reviews.length === 1 && <span className="reviews-amount">({reviews.length} review)</span>}
                    {reviews.length > 1 && <span className="reviews-amount">({reviews.length} reviews)</span>}
                </span>
            </div>
            <div className="user-reviews flex">

                {reviews.map(review =>
                    <article className="flex column" key={review.id}>
                        <div className="review-by flex align-center">
                            <img className="host-img" src={review.by.imgUrl} />
                            <h4 className="review-name">{review.by.fullname}</h4>
                            {/* <p className="review-date"></p> */}
                        </div>
                        <div className="review-parameters flex column">
                            <p className="review-txt">{review.txt}</p>
                        </div>
                    </article>
                )}
            </div>
            <div className="add-review-container details-container grid">
                <div className="stars-container">
                    <article className="review-ctg flex align-center">
                        <h4>Cleanliness</h4>
                        <Rate />
                    </article>
                    <article className="review-ctg flex align-center">
                        <h4>Accuracy</h4>
                        <Rate />
                    </article>
                    <article className="review-ctg flex align-center">
                        <h4>Communication</h4>
                        <Rate />
                    </article>
                    <article className="review-ctg flex align-center">
                        <h4>Location</h4>
                        <Rate />
                    </article>
                    <article className="review-ctg flex align-center">
                        <h4>Check-in</h4>
                        <Rate />
                    </article>
                    <article className="review-ctg flex align-center">
                        <h4>Value</h4>
                        <Rate />
                    </article>
                </div>
                <textarea name="add-review" cols="30" rows="10"></textarea>
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
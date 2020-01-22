import React from 'react'

const Reviews = (props) => {

    const readMore = (e) => {
        if(e.target.className === 'reviews-toggle') {
            let button = e.target;
            let review = e.target.previousSibling;
            review.classList.toggle('full-height');
            button.innerHTML = button.innerHTML === 'Show More' ? 'Show Less' : 'Show More';
        }
    }

    const reviews = props.reviews;

    return (
        <section id="reviews" onClick={readMore}>
            <h1>Reviews</h1>
            
            {reviews ? reviews.map((cur) => (
                <div key={cur.id}>
                    <h4>{cur.author}</h4>
                    <p className="review">{cur.content}</p>
                    <button className="reviews-toggle">Show More</button>
                </div>
            )) : ''}
            
        </section>
    )
}
export default Reviews;

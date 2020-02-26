import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = (props) => {

    //takes in the number rating from props, since we only want to display 5 stars. We divide by 2
    const rating = Math.round(props.rating/2);
    //Loop through the node list until the index is less than the rating and add the active class style for the change of color
    document.querySelectorAll('.star-rating-container-item').forEach((cur, i) => {
        if(i < rating){
            cur.classList.add('star-rating-container-item-active');
        }
    })
    
    return (
        <div className="star-rating-container">
            <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
            <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
            <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
            <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
            <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
        </div>
    )
}
export default Stars;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../../Dashboard/User/Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-wildwood-60336.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <Container className="review-style p-5" fluid >
            <h1 className="header-text mb-5 ">
                REVIEW CATEGORY
            </h1>
            <Row>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;
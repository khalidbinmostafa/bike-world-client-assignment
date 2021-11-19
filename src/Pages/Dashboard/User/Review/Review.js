import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';




const Review = () => {

    const [name, setName] = useState('')
    const [reviews, setReviews] = useState('')
    const [rating, setRating] = useState(0)

    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
        e.target.value = ''
    }
    const handleReview = (e) => {
        console.log(e.target.value)
        setReviews(e.target.value)
        e.target.value = ''
    }

    const handleRating = (e) => {
        console.log(e.target.value)
        setRating(e.target.value)
        e.target.value = ''
    }

    const handleSubmit = () => {
        const data = {
            name: name,
            review: reviews,
            rating: rating
        }
        console.log(data)

        fetch('https://enigmatic-wildwood-60336.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }


    // console.log(user.email)
    return (
        <Container fluid className="pt-4">

            <h3 className="text-info mb-3">PLEASE MAKE A REVIEW </h3>

            <Form className="d-flex flex-column mt-3 justify-content-center mx-auto pb-4 px-3 form-input">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-white">Reviewer Name</Form.Label>
                    <Form.Control className="mb-3 bg-transparent text-dark container-input" onBlur={handleName} type="email" placeholder="YOUR NAME" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="text-white">Example textarea</Form.Label>
                    <Form.Control className="mb-3 bg-transparent text-dark  container-input" onBlur={handleReview} as="textarea" placeholder="YOUR REVIEW" rows={4} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-white">Rating</Form.Label>
                    <Form.Control className="mb-3 bg-transparent text-dark container-input" onBlur={handleRating} type="email" placeholder="YOUR RATING" />
                </Form.Group>

                <Button className="w-50 mx-auto fs-6 " onClick={handleSubmit}>SUBMIT </Button>
            </Form>


        </Container>
    );
};

export default Review;
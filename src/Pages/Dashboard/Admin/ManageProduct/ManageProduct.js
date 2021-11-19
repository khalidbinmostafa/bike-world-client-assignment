import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ManageProduct = ({ product }) => {
    const { name, color, description, _id, img, price, model } = product

    const handleDelete = id => {
        const proceed = window.confirm('Are You sure to remove this product?')
        if (proceed) {
            fetch(`https://enigmatic-wildwood-60336.herokuapp.com/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                    }
                })
        }
    }
    return (
        <Col xs={12} md={12} lg={6}>
            <Card className="card-style mt-3 mb-5 ">
                <Card.Img className="img-fluid" src={img}></Card.Img>
                <Card.Body className="d-flex flex-column justify-content-start align-items-start">
                    <Card.Title className="fw-bold  card-text card-detail">{name}</Card.Title>
                    <Card.Subtitle className=" fw-bold mb-3 mt-4 card-text">{color}</Card.Subtitle>
                    <Card.Subtitle className="mb-3 card-text">{description}</Card.Subtitle>
                    <Card.Subtitle className="mb-3 card-text">{price}</Card.Subtitle>
                    <Card.Subtitle className="mb-3 card-text">{model}</Card.Subtitle>
                    <Button onClick={() => handleDelete(_id)} variant="dark" className=" text-warning" >REMOVE</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageProduct;
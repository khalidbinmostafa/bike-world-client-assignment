import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ManageOrder = ({ order }) => {
    console.log(order)
    const { _id, address, email, name, brand, Status } = order
    const handleDelete = id => {
        const proceed = window.confirm('Are You proceed to Cancel the Order?')
        if (proceed) {
            fetch(`https://enigmatic-wildwood-60336.herokuapp.com/users/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                    }
                })
        }
    }

    return (
        <Col xs={12} md={12} lg={6}>
            <Card className="card-style mt-5 mb-5">

                <Card.Body>
                    <Card.Title className="fw-bold mb-3 mt-4 card-text">{name}</Card.Title>
                    <Card.Title className="fw-bold mb-3 mt-4 card-text">{brand}</Card.Title>
                    <Card.Subtitle className="fw-bold mb-3 mt-4 card-text"> {address}</Card.Subtitle>
                    <Card.Subtitle className="fw-bold mb-3 mt-4 card-text">{email}</Card.Subtitle>
                    <Card.Subtitle className="fw-bold mb-3 mt-4 card-text">Status: {Status}</Card.Subtitle>
                    <Button onClick={() => handleDelete(_id)} variant="dark" className=" text-warning" >Cancel Purchase</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageOrder;
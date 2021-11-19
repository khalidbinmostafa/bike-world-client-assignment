import React from 'react';
import { Col, Button } from 'react-bootstrap';

const DisplayOrder = (props) => {

    const { address,
        brand,
        email,
        name,
        phone,
        Status,
        _id
    } = props.allOrder


    const handleUpdate = id => {
        fetch(`https://enigmatic-wildwood-60336.herokuapp.com/users/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(props)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User Updated Successfully')
                }
                console.log(data)
            })
    }
    return (
        <Col xs={12} md={6} lg={3}>
            <div className="card-style mt-5 mb-5 p-4 border border-secondary rounded-3 border-2">
                <p>ID: {_id}</p>
                <p>Email: {email}</p>
                <p>Name: {name}</p>
                <p>Address: {address}</p>
                <p>Status: {Status}</p>


                <Button variant="dark" className="text-warning" onClick={() => handleUpdate(_id)}>
                    Update Status
                </Button>
            </div>
        </Col>
    );
};

export default DisplayOrder;
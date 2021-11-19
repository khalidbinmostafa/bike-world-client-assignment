import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayOrder from '../DisplayOrder/DisplayOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-wildwood-60336.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllOrders(data)
            })
    }, [])
    return (
        <Container fluid className="card-style pt-5">
            <h3 className="text-info mb-3">UPDATE PRODUCT STATUS</h3>
            <Container>
                <Row >
                    {
                        allOrders.map(allOrder => <DisplayOrder
                            key={allOrder._id}
                            allOrder={allOrder}></DisplayOrder>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default ManageAllOrders;
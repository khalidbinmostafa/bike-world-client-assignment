import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://enigmatic-wildwood-60336.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, [])
    return (
        <Container fluid className="card-style pt-4" >
            <h3 className="text-info mb-3">YOUR ORDERS ARE DISPLAYED HERE</h3>

            <Container>
                <Row >
                    {
                        orders.map(order =>
                            <ManageOrder
                                key={order._id}
                                order={order}
                            ></ManageOrder>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default MyOrder;
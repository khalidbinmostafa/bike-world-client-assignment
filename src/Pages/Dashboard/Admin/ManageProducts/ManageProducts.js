import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-wildwood-60336.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <Container className="card-style pt-5" fluid>
            <h3 className="text-info mb-3">REMOVE PRODUCT</h3>
            <Container>
                <Row>
                    {
                        products.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                        ></ManageProduct>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default ManageProducts;
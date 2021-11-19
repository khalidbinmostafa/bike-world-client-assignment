import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreDetails from '../ExploreDetails/ExploreDetails';


const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-wildwood-60336.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <Container className="card-style pt-4" fluid >
            <h2 className="header-text">Explore More Products!</h2>
            <Container>
                <Row>
                    {products.map(product => <ExploreDetails
                        key={product._id} product={product}
                    ></ExploreDetails>)}
                </Row>
            </Container>

        </Container>
    );
};

export default Explore;

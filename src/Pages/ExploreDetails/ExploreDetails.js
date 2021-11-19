import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExploreDetails.css';

const ExploreDetails = ({ product }) => {
    const { _id, name, img, price } = product;
    console.log(product);
    return (

        <div className="col col-lg-4 col-s-12">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><span className="fw-bold">Bike Name:</span> {name}</h5>
                    <h5 className="card-title"><span className="fw-bold">Price:</span> {price}</h5>
                    <Link to={`/purchase/${_id}`}>
                        <button className="header-btn">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ExploreDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, price } = service;
    return (
        <div className="col col-lg-4 col-sm-6">
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

export default Service;
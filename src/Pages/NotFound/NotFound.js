import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mb-5">
            <img style={{ width: '100%' }} src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            <Link to="/"><button style={{ color: 'white' }} className="bg-danger">Go Back</button></Link>
        </div>
    );
};

export default NotFound;
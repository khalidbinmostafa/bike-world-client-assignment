import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    const [page, setPage] = useState('home')
    const size = 6;
    useEffect(() => {
        fetch(`https://enigmatic-wildwood-60336.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    console.log(services);

    return (
        <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {
                // console.log(services);
                services.map(service => <Service key={service.key} service={service} ></Service>)
            }

        </div>
    );
};

export default ServiceCard;
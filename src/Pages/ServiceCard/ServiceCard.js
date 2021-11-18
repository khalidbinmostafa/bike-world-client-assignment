import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./bikeWorld.json')
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
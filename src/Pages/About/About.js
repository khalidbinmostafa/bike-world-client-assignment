import React from 'react';
import './About.css';

const About = () => {
    return (
        <><div className="container my-5">
            <div className="d-flex row">
                <div className="text-center mx-3 col-lg-4 col-sm-6">
                    <h1><span className="fw-normal">We Offer</span>
                        <span className="header-text">Advanced Bike For You</span></h1>
                    <p>Come down and visit us and check out our new equipment including MID DRIVE Electric Bikes, Electric EScooters and a new fleet of lighter and more comfortable Double and Single kayaks. With everything from Tandem bikes, Hybrid bikes, Sups and our ever popular Family Quad Cycles we have something for everyone to enjoy the great outdoors.</p>
                </div>
                <div className="col-lg-7 col-sm-6">
                    <img className="img-fluid response" src="https://template.hasthemes.com/oswan/oswan/assets/img/blog/blog-hm-2.jpg" alt="" />
                </div>
            </div>
            <h1 className="mt-3">In our Services <span className="header-text">We Provide</span></h1>
            <div className="d-flex row mt-3">

                <div className="col-lg-3 col-sm-4 fw-bold">
                    <ul className="fs-4">
                        <li>We offer the best service. So the customers have nothing to worry.</li>
                        <li>We don't provide used bikes.</li>
                        <li>Low Cost for purchasing bikes. The visit of doctor is very much low price.</li>
                        <li>Proper Documents are provided.</li>
                        <li>We provide insurance for the safety of bike.</li>
                    </ul>
                </div>
                <div className="col-lg-8 col-sm-7 mx-3">
                    <div className="mb-3"> <img className="img-fluid px-3" src="https://template.hasthemes.com/oswan/oswan/assets/img/blog/blog-hm-1.jpg" alt="" />
                    </div>
                    <div><img className="img-fluid" src="https://template.hasthemes.com/oswan/oswan/assets/img/blog/blog-hm-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div></>

    );
};

export default About;
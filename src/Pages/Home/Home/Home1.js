import React from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home1 = () => {
    return (
        <><> <div>
            <img className="width" src="https://www.globalsuzuki.com/motorcycle/products/gsx250r/images/gsx250ral8_action_2_20180322.jpg?crc=4203038739" alt="" />
        </div>
            <div className="container text-center mt-3">

                <div>
                    <h1><span className="header-text">Welcome To</span> - Bike <span className="header-text">World</span>
                        <br /> HTML Template</h1>
                    <p>Our Website Provides You Best Services</p>
                </div>
                <div className="mt-4">
                    <button type="button" className="header-btn fw-bolder">Our Services +</button>
                    <p className="mt-3">More Services Coming Soon</p>
                </div>
            </div>
            <Reviews></Reviews>
        </></>
    );
}
export default Home1;
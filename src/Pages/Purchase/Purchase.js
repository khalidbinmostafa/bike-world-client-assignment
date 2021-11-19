import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { carId } = useParams()
    // console.log(carId)
    const { user } = useAuth()
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch(`https://enigmatic-wildwood-60336.herokuapp.com/products?carId=${carId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    const findProduct = products.find(product => product?._id === carId)
    // console.log(findProduct)
    // setSingleProduct(findProduct)
    const onSubmit = data => {

        fetch('https://enigmatic-wildwood-60336.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    alert('User Added Successfully')
                    reset(data)
                }
            })

        // console.log(data)

    };


    return (
        <>
            <Container className="container-body" fluid>
                <Container>
                    <Row className="pb-5">

                        <div className="mt-3 mb-5">
                            <h2 className="header-text">PURCHASE INFORMATION</h2>
                        </div>

                        <Col xs={12} md={6} lg={6}>
                            <img src={findProduct?.img} className="img-fluid rounded-2" alt="" />

                        </Col>
                        <Col xs={12} md={6} lg={6} className="d-flex flex-column align-items-end justify-content-center">
                            <h3 className="text-primary"><span className="fw-bold" style={{ color: "black" }}>Bike Name:</span> {findProduct?.name}</h3>
                            <h3 className="text-primary"><span className="fw-bold" style={{ color: "black" }}>Price :</span> {findProduct?.price}</h3>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="order-container" fluid>
                <Row className=" mx-auto">
                    <Col xs={12} md={12} lg={12} className="mb-5 mt-2">


                        <form className="d-flex flex-column mt-5 justify-content-center mx-auto pb-4 px-3  form-container" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="mt-3 mb-4 text-warning">REGISTER</h3>
                            <input className="mb-3 bg-transparent text-white border-0 border-bottom"

                                defaultValue={user.displayName}  {...register("name", { required: true })} />

                            {errors.name && <span className="text-danger">This field is required</span>}

                            <input className="mb-3 bg-transparent text-white border-0 border-bottom"

                                defaultValue={user.email} {...register("email", { required: true })} />

                            {errors.email && <span className="text-danger">This field is required</span>}

                            <input className="mb-3 bg-transparent text-white border-0 border-bottom" placeholder="Address Field" {...register("address", { required: true })} />

                            {errors.address && <span className="text-danger">This field is required</span>}

                            <input className="mb-3 bg-transparent text-white border-0 border-bottom" placeholder="Phone Number" {...register("phone", { required: true })} />

                            {errors.phone && <span className="text-danger">This field is required</span>}

                            <input className="mb-3 bg-transparent text-white border-0 border-bottom" defaultValue={findProduct?.name}

                                {...register("brand", { required: true })} />

                            {errors.place && <span className="text-danger">This field is required</span>}

                            <input className="mb-3 bg-transparent text-white border-0 border-bottom" placeholder={"Status"} defaultValue={"PENDING"}  {...register("Status", { required: true })} />

                            {errors.status && <span className="text-danger">This field is required</span>}



                            <input className="bg-secondary border-0 text-warning fw-bold fs-4 w-50 mx-auto" type="submit" />

                        </form>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Purchase;
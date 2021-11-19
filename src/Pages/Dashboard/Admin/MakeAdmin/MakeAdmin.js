import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // const { email } = useAuth()
    // console.log(email);
    const onSubmit = data => {
        console.log(data);
        fetch(`https://enigmatic-wildwood-60336.herokuapp.com/users/admin/${data.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User Added Role as Admin')
                    reset(data)
                }
                else {
                    alert('Bad Request')
                }
            })

    };


    return (
        <Container fluid>
            <Container className="mt-5">
                <h3 className="text-info mb-3">PLEASE MAKE AN ADMIN</h3>
            </Container>
            <Container>
                <Row>
                    <form className="d-flex flex-column mt-5 justify-content-center mx-auto form-input" onSubmit={handleSubmit(onSubmit)}>

                        <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="Enter An Email"  {...register("email", { required: true })} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="bg-primary border-0 text-white fs-5 w-25 rounded-3 mx-auto" type="submit" />
                    </form>
                </Row>
            </Container>
        </Container>
    );
};

export default MakeAdmin;
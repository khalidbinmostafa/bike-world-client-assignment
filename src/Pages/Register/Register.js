import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory()

    const { authError, registerUser } = useAuth()

    const onSubmit = data => {
        console.log(data.email, data.password, data.name)
        registerUser(data.name, data.email, data.password, history)
        reset(data)
    };
    return (
        <Container>

            <h2 className="header-text mt-4">PLEASE REGISTER</h2>

            <form className="d-flex flex-column mt-5 justify-content-center mx-auto form-input" onSubmit={handleSubmit(onSubmit)}>

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="Name" {...register("name", { required: true })} />

                {errors.name && <span>This field is required</span>}

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="Email" {...register("email", { required: true })} />

                {errors.email && <span>This field is required</span>}

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="Password" {...register("password", { required: true })} />

                {errors.password && <span>This field is required</span>}

                <input className="bg-primary border-0 text-white fs-5 w-25 rounded-3 mx-auto mt-3" type="submit" />
            </form>

            <h4 className="text-danger mt-4 mb-2">{authError}</h4>

            <Link className="link-container" to='/login'>
                <h4>Already Register?</h4>
            </Link>
        </Container>
    );
};

export default Register;
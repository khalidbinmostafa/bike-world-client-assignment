import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { authError, signInUser } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        signInUser(data.email, data.password, location, history)
    };
    return (
        <Container>
            <h2 className="header-text mt-4">PLEASE LOGIN</h2>

            <form className="d-flex flex-column mt-5 justify-content-center mx-auto form-input" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="Enter Your Email" {...register("email", { required: true })} />

                {errors.email && <span>This field is required</span>}

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="Enter Your Password" {...register("password", { required: true })} />

                {errors.password && <span>This field is required</span>}

                <input className="bg-primary border-0 text-white fs-5 w-25 rounded-3 mx-auto mt-3" type="submit" />
            </form>

            <h4 className="text-danger mt-4 mb-2">{authError}</h4>

            <Link className="link-container" to='/register'>
                <h4>Not Yet Register? Register Now!</h4>
            </Link>

        </Container>
    );
};

export default Login;
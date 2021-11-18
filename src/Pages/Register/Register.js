import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const {
        user,
        name,
        googleSignIn,
        handleName,
        handleEmail,
        handlePassword,
        registerUser,
        error,
    } = useAuth();
    return (
        <Container>
            <h1>Please Register </h1>
            <Form onSubmit={registerUser}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        onBlur={handleName}
                        type="name"
                        placeholder="Your Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={handleEmail}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onBlur={handlePassword}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
            </Form>

            <Button onClick={registerUser} variant="primary" type="submit">
                Sign Up
            </Button>
            <br />
            <br />
            <Button onClick={googleSignIn} variant="info" type="submit">
                Google Sign In
            </Button>
            <div>
                <Link to="/login">Already Register?</Link>
            </div>
            {!user?.displayName && <p className="text-danger">{error}</p>}
        </Container>
    );
};

export default Register;
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {
        user,
        googleSignIn,
        handleEmail,
        handlePassword,
        error,
        signInWithEmailPassword,
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn().then(result => {
            history.push(redirectUrl);
        });
    };

    return (
        <>
            <Container className="mt-5">
                <h1>Please Login</h1>
                <Form>
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

                <Button
                    onClick={signInWithEmailPassword}
                    variant="primary"
                    type="submit"
                >
                    LOGIN
                </Button>
                <br />
                <br />
                <Button onClick={handleGoogleLogin} variant="info" type="submit">
                    Google Sign In
                </Button>
                <div>
                    <Link to="/register">Not Yet Register?</Link>
                </div>
                {!user?.displayName && <p className="text-danger">{error}</p>}
            </Container>
        </>
    );
};

export default Login;
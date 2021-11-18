import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Home.css';


const Home = () => {
    const { user, userSignOut } = useAuth();
    return (
        <><div className="mb-3">
            <Nav className="sticky-top navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <Link className="navbar-brand" to="/service/:serviceId">Purchase</Link>
                    <Navbar.Text className="text-white mx-5">
                        <span className="text-info">Signed in as: </span>
                        {user?.displayName}
                    </Navbar.Text>

                    {user?.displayName ? (
                        <Button onClick={userSignOut} variant="info" type="submit">
                            LOGOUT
                        </Button>
                    ) : (
                        <Nav.Link as={HashLink} to="/login">
                            LOGIN
                        </Nav.Link>
                    )}

                </div>
            </Nav>

        </div>
        </>
    );
};

export default Home;
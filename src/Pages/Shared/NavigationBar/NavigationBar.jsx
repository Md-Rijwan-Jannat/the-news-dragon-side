import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result =>{
                console.log(result)
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" className='my-2' variant="white">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center">
                            <Link className='text-decoration-none text-secondary me-1 hover' to={'/category/0'}>Home</Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem', marginRight: '10px' }}></FaUserCircle>
                            }
                            {
                                user ? <Button onClick={handleLogOut} className='px-5 bg-opacity-25' variant="dark">Log Out</Button> : <Link to='/login'><Button className='px-5 bg-opacity-25' variant="dark">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
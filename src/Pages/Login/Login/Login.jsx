import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/category/0' ;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Successfully login');
                form.reset('');
                navigate(from, {replace: true})
            })
            .catch(error =>{
                console.log(error)
                toast.error(error.message);
            })
    }
    return (
        <Container className=' h-100 p-5 rounded-3'>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto bg-light rounded-3 shadow-lg'>
                <h4 className='text-center pt-4'>Login your account</h4>
                <div className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Email address</b> </Form.Label>
                        <Form.Control className='p-3 bg-secondary bg-opacity-10' type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <b>Password</b> </Form.Label>
                        <Form.Control className='p-3 bg-secondary bg-opacity-10' type="password" placeholder="Password" name='password' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" />
                    </Form.Group>
                    <Button className='w-100' variant="dark" type="submit">
                        <b>Login</b>
                    </Button>
                    <p className='mt-4'>Dont’t Have An Account ? <b ><Link className='text-decoration-none' to={'/register'}>register</Link></b></p>
                </div>
            </Form>
        </Container>
    );
};

export default Login;
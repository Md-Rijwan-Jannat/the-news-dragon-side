import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    // Auth Context use
    const { createUser, user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const password = form.password.value;
        const email = form.email.value;
        console.log(name, email, url, password);
        // sign Up
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Successfully register')
                form.reset('');
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            toast.error('Please added tow uppercase latter!');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            toast.error("Please inter a tow number!");
            return;
        }
        else if (password.length < 6) {
            toast.error('Please added 6 character long number !')
        }
    }
    return (
        <Container className='h-100 p-5 rounded-3'>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto bg-white rounded-3 shadow-lg '>
                <h4 className='text-center pt-4'>Register a new account</h4>
                <div className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <b>User Name</b> </Form.Label>
                        <Form.Control className='p-3 bg-secondary bg-opacity-10' type="text" placeholder="Enter email" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <b>Photo URL</b> </Form.Label>
                        <Form.Control className='p-3 bg-secondary bg-opacity-10' type="text" placeholder="Photo URL" name='url' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <b>Email address</b> </Form.Label>
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
                        <b>register</b>
                    </Button>
                    <p className='mt-4'>Already have an account? Please <b ><Link className='text-decoration-none' to={'/login'}>login</Link></b></p>
                </div>
            </Form>
        </Container>
    );
};

export default Register;
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter,FaInstagram } from 'react-icons/fa';
import Q_Zone from '../Q-Zone/Q_Zone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold mb-4'>Login with</h4>
            <Button className='mb-2 w-100' variant="outline-primary"> <FaGoogle /> Login with google</Button>
            <Button className='mb-2 w-100' variant="outline-dark"><FaGithub /> Login with github</Button>

            <div>
                <ListGroup>
            <h4 className='fw-bold mb-4 mt-5 text-secondary'>Find Us On</h4>
                    <ListGroup.Item> <FaFacebookF className='bg-secondary bg-opacity-10 p-2 h2 rounded-circle  text-primary'/> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='bg-secondary bg-opacity-10 p-2 h2 rounded-circle  text-primary'/> twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='bg-secondary bg-opacity-10 p-2 h2 rounded-circle  text-danger'/> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Q_Zone></Q_Zone>
            <div className='position-relative px-2'>
                <img className='w-100  img-fluid' src={bg} alt="" />
                <div className='position-absolute top-0 text-center text-white py-2'>
                    <h4 className='p-2'>Create an Amazing Newspaper</h4>
                    <p className=' text-lg p-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger text-ali px-4 rounded-0 py-3">Learn More</Button>
                </div>
            </div>
        </div>

    );
};

export default RightNav;
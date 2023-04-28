import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import NewsInsights from './NewsInsights/NewsInsights';
import { AuthContext } from '../../../Provider/Provider';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news;
    const {user} = useContext(AuthContext);
    return (
       <div>
        <h4>The Dragon news</h4>
         <Card>
            <Card.Img variant="top" className='p-3' src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link className='d-flex align-items-center text-decoration-none' to={`/category/${category_id}`}><Button variant="danger" className='rounded-0'><FaArrowLeft /> All news in this category</Button></Link>
            </Card.Body>
        </Card>
        <div className='mt-4'>
            <h4>Editors Insight</h4>
            <NewsInsights/>
        </div>
       </div>
    );
};

export default News;
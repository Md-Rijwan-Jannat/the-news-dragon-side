import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../../src/assets/1.png'
import second from '../../../../src/assets/2.png'
import third from '../../../../src/assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className='text-dark'>
            <h4 className=''>All categories</h4>
            <div>
                <h4 className='bg-secondary bg-opacity-10 p-3 w-100 mt-4 text-center'>National news</h4>
                <div className='ms-4'>
                    {
                        categories.map(category => <p
                            key={category.id}
                            category={category}
                        >
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary link-primary link-opacity-100 link-opacity-100-hover'>{category.name}</Link>

                        </p>)
                    }
                </div>
            </div>
            <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default LeftNav;
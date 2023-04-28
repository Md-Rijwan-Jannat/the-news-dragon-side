import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaStar, FaEye, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <Card className="mb-4">
            <Card.Header className=' d-flex gap-3 align-items-center'>
                <Image style={{ width: '45px' }} src={author.img} roundedCircle />
                <div className='flex-grow-1'>
                    <Card.Text className='mb-0 text-dark '><b><small>{author.name}</small></b></Card.Text>
                    <Card.Text className='text-secondary'><small>{moment(author.published_date).format('YYYY-DD-MM')}</small></Card.Text>
                </div>
                <div className='text-secondary d-flex gap-2'>
                    <FaBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mt-3 mb-3' variant="top" src={image_url} />
                <Card.Text className='text-secondary'>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more..</Link></>}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
                <div className='d-flex text-warning text-opacity-75 align-items-center'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaStarHalfAlt/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                    ></Rating>
                    <small className='text-dark ms-2 mt-1'> {rating.number}</small>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaEye />
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
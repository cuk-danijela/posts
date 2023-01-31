import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { apiUrl, apiKeyPost } from '../../util/api';
import { BsArrowLeft } from "react-icons/bs";
import { Card, Container, Row, Col, Button, Toast } from 'react-bootstrap';
import Comments from '../Comments/Comments';

const Post = () => {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState('');


    useEffect(() => {
        const getPostById = async () => {
            try {
                const res = await fetch(`${apiUrl}/post/:id`,
                {
                    method: "GET",
                    withCredentials: true,
                    headers: {
                        'app-id': apiKeyPost,
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    },
                })
                if (!res.ok) throw new Error("Could not found!");
                const data = await res.json();
                setPost(data);
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        const getCommentById = async () => {
            try {
                const res = await fetch(`${apiUrl}/post/:id/comment`,
                    {
                        method: "GET",
                        withCredentials: true,
                        headers: {
                            'app-id': apiKeyPost,
                            'Accept': 'application/json',
                            'Content-Type': 'multipart/form-data'
                        },
                    })
                if (!res.ok) throw new Error("Could not found!");
                const data = await res.json();
                setComment(data);
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        getPostById();
    }, []);

    return (
        <Container>
            <Row>
                <Col><Link to="/" className="btn btn-light"><BsArrowLeft /> Go Back</Link></Col> 
            {/* {post.map((post, index) => ( */}
                <Card>
                    <Card.Header>Header</Card.Header>
                    <Col><Card.Img variant="top" src="holder.js/100px160" /></Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                {/* <TfiAlarmClock /><span>{getFormattedDate(post.publishDate)}</span><br /> */}
                                {/* <div className="card-text">{post.text}</div> */}
                                {/* {post.tags.map((tag, index) => (<div key={index} className="card-tags">{tag}</div>))} */}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                
            {/* )) */}
            {/* } */}
            <Comments/>
            </Row>
        </Container>
    )
}

export default Post;
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from '../../util/api';
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiChatHeartFill } from "react-icons/ri";

const Posts = (postId) => {

    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState('');

    const getAllPosts = async () => {

        try {
            const res = await fetch(`${apiUrl}/posts`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            })
            if (!res.ok) throw new Error("Not right!");
            const data = await res.json();
            setPosts(data);
            setIsLoading(false);
            console.log(data);
        }

        catch (error) {
            setIsLoading(false);
            setError(error.message);
            console.log(error.message);
        }
    };

    useEffect(() => {
        getAllPosts();
    });

    return (

        <Container>
            <div className="jumbotron">
                <h1>PAGE FOR POST LOVERS</h1>
                <p className="text-light" style={{fontSize: '50px'}}><RiChatHeartFill /></p>
            </div>
            {isLoading && !Error && <h4><Spinner animation="border" variant="primary" /></h4>}
            {!Error && isLoading && <h4>{Error}</h4>}
            <Row className='d-flex justify-content-center'>
                <Col className="col-6">
                    <Button variant="primary" className="btn-block w-100 mt-5 mb-5" onClick={() => navigate("/new")}>Create new post <AiOutlinePlus /></Button>
                </Col>
            </Row>
            <Row>
                {posts.map((post, id) => (
                    <Col key={id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <hr />
                                <Card.Text>{post.body}</Card.Text>
                                <Link to={`post/${post.id}`}>
                                    <Button variant="primary" className="card-btn-view">View more details <BsArrowRight /></Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <p className="text-center text-light text-xs mt-6">
                    &copy;2023 Cuk Danijela | All rights reserved.
                </p>
            </Row>
        </Container>
    )
}

export default Posts;


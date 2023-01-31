import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { apiUrl } from '../../util/api';



const Post = () => {

    let { postId } = useParams();
    const [post, setPost] = useState([]);

    const getSinglePost = async () => {
        try {
            const res = await fetch(`${apiUrl}/posts/${postId}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            })
            if (!res.ok) throw new Error("Not right!");
            const data = await res.json();
            setPost(data);
            console.log(data);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => { getSinglePost() },);

    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/" className="btn btn-light"><BsArrowLeft /> Go Back</Link>
                </Col>

                {post.map((data, id) => {
                    return (
                        <Col>
                            <Card key={id}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.text}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )
}

export default Post;


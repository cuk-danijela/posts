import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { apiUrl } from '../../util/api';



const Post = () => {

    let navigate = useNavigate()
    let { postId } = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // const borders = post.map((post) => post.borders);

    useEffect(() => {
        const getSinglePost = async () => {
            try {
                const res = await fetch(`${apiUrl}/posts/${postId}`);
                if (!res.ok) throw new Error("Could not found!");
                const data = await res.json();
                setPost(data);
                setIsLoading(false);
                // console.log(data);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        getSinglePost();
    }, [postId]);

    console.log(post);

    return (
        <Container>
            <Row>
                <Col md="2">
                    <Button variant="primary" className="btn-block w-100 mt-5 mb-5" onClick={() => navigate("/")}><BsArrowLeft /> Go back</Button>
                </Col>
            </Row>
            {isLoading && !Error && <h4><Spinner animation="border" variant="primary" /></h4>}
            {!Error && isLoading && <h4>{Error}</h4>}
            <Row>
             
                
                        <Col>
                            <Card>
                                <Card.Header>Header</Card.Header>
                        
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                   
            </Row>
        </Container>
    )
}

export default Post;


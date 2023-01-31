import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Badge, Toast, Image } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { TfiAlarmClock } from 'react-icons/tfi';
import { BsArrowLeft, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
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
    useEffect(() => { getSinglePost()}, []);


return (
    <Container>
        <Row>
            Hey
            <Col><Link to="/" className="btn btn-light"><BsArrowLeft /> Go Back</Link></Col>


            <div>
                {post.map((data, id) => {
                    return (
                        <Col key={id}>
                            <Card>
                                <Card.Header>Header</Card.Header>
                                <Col><Image src={data.owner.picture} roundedCircle /> {data.owner.firstName} {data.owner.lastName}</Col>

                                <Col>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                            {/* <TfiAlarmClock /><span>{getFormattedDate(data.publishDate)}</span><br /> */}
                                            <div className="card-text">{data.text}</div>
                                            {/* {data.tags.map((tag, index) => (<div key={index} className="card-tags">{tag}</div>))} */}
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
                        </Col>
                    );
                })}
            </div>
           
        </Row>
    </Container>
)
}

export default Post;


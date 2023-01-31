import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AiOutlineSend } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";


export default function NewPost() {

    let navigate = useNavigate()
    const [value, setValue] = React.useState();
    const [formInputData, setformInputData] = useState(
        {
            userId: '',
            title: '',
            body: ''

        }
    );

    const handleTitle = (evnt) => {
        setValue(evnt.target.value);
        console.log(evnt.target.value)
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        // evnt.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formInputData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    console.log(formInputData);





    return (
        <Container>
            <Row>
                <Col md="2">
                    <Button variant="primary" className="btn-block w-100 mt-5 mb-5" onClick={() => navigate("/")}><BsArrowLeft /> Go back</Button>
                </Col>
            </Row>
            <div className="jumbotron">
                <h1>Write a new post!</h1>
            </div>
            
            <Row className="flex justify-content-center" >
                <Col md='6' >
                    <Form >
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Title"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter post title"
                                onChange={handleTitle}
                                value={formInputData.value} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Your post">
                            <Form.Control
                                as="textarea"
                                placeholder="Write your post here"
                                name="body"
                                onChange={handleTitle}
                                style={{ height: '20rem' }}
                            />
                        </FloatingLabel>
                        <Col>
                            <Button variant="primary" className="card-btn" type="submit" onClick={handleSubmit}>Send your post <AiOutlineSend /></Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
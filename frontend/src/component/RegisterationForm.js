import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/logo.png';
import axios from 'axios';
import QRCode from 'qrcode';

export function RegisterationForm() {

    const [dob, setDob] = useState("");
    const [name, setName] = useState("");
    const [licType, setLicType] = useState("");
    const [licRestric, setLicRestric] = useState("");
    const [issued, setIssued] = useState("");
    const [offerUrl, setOfferUrl] = useState("");
    const [offerData, setOfferData] = useState("");

    const issueCredHandler = async (ev) => {
        ev.preventDefault();
        const res = await axios({
            method: 'post',
            url: 'http://localhost:8000/api/issue',
            data: {
                name: name,
                dob: dob
            }
        });

        setIssued(true);
        setOfferUrl(res.data.offerUrl);
        setOfferData(res.data.offerData);
        var canvas = document.getElementById('canvas');
        await QRCode.toCanvas(canvas, res.data.offerUrl);

    }
    

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                DecentDL - Issuer
                </Navbar.Brand>
            </Navbar>
            <br></br>
            <div>
            <Form>
                <Container>
                    <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Name</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label>Date of Birth</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="date" placeholder="Enter Date of Birth" onChange={e => setDob(e.target.value)} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label>License Type</Form.Label>
                        </Col>
                        <Col>
                            <Form.Check 
        type='radio'
        id="1"
        label="Vehicle"
      />

      <Form.Check
        type='radio'
        label="Motorbike"
        id="2"
      />
                        </Col>    
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label >Restrictions</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Enter Restrictions" onChange={e => setLicRestric(e.target.value)} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                        </Col>                        
                        <Col>
                        </Col>
                        <Col>
                            <Button variant="secondary" type="submit" onClick={issueCredHandler} block>Issue</Button>
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                        </Col>                          
                    </Row>            
                    </Form.Group>
                </Container>
            </Form>
            </div>
            <br></br>
            <div>
                <Container>
                    <Row>
                        <Col>
                        </Col>                        
                        <Col>
                        </Col>                                         
                        <Col>
                            { issued ? <canvas id="canvas"></canvas> : <span>Not issued yet</span>}
                            { offerUrl }
                        </Col>
                        <Col>
                        </Col>                                         
                                       
                    </Row>    
                </Container>
            </div>
        </>

    );
  }

  
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/logo.png';
import axios from 'axios';
import QRCode from 'qrcode';

export function VerificationForm() {

    const [dob, setDob] = useState("");
    const [verifier, setVerifier] = useState("");
    const [verified, setVerified] = useState("");
    const [approved, setApproved] = useState("");
    const [verificationId, setVrificationId] = useState("");
    const [verificationUrl, setVerificationUrl] = useState("");
    const [verificationData, setVerificationData] = useState("");    

    const verifyCredHandler = async (ev) => {
        ev.preventDefault();
        const res = await axios({
            method: 'get',
            url: 'http://localhost:8000/api/requestVerification'
        });

        setVrificationId(res.data.verificationId);
        setVerificationUrl(res.data.verificationRequestUrl);
        setVerificationData(res.data.verificationRequestData);
        var canvas = document.getElementById('canvas');
        await QRCode.toCanvas(canvas, res.data.verificationRequestUrl);
    }

    const scanCredHandler = async (ev) => {
        ev.preventDefault();
        setVerified(true);
    }

    const approveCredHandler = async (ev) => {
        ev.preventDefault();
        setApproved(true);
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
        DecentDL - Verifier
        </Navbar.Brand>
    </Navbar>
    <br></br>
    <div>
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                </Col>                        
                <Col>
                </Col>
                <Col>
                    <Button variant="secondary" type="submit" onClick={verifyCredHandler} block>Verify</Button>
                </Col>
                <Col>
                </Col>                        
                <Col>
                </Col>                
            </Row>
        </Container>
    </div>
    <div>
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                            <canvas id="canvas"></canvas>
                            <br></br>
                            { verificationUrl ? <Button variant="secondary" onClick={scanCredHandler} block>Scan</Button> : '' }
                        </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </div> 
            <br></br>
            <br></br>
    <div>
                <Container>
                    <Row>
                    <Col>
                    </Col>
                    <Col>
                    {verified ? <h3>Select attributes:</h3> : '' }
                </Col>
                <br></br>
                <Col>
                </Col>
            </Row>
            <Row>
            <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                { verified ? <Form><Form.Check type='checkbox' id="1" label="Name" />
      <Form.Check
        type='checkbox'
        label="Date of Birth"
        id="2"
      /> </Form> : "" }
                </Col>
                <br></br>
                        <Col>
                        </Col>    
                        <Col>
                        </Col>                                                                
                    </Row>
                    <br></br>
                    <Row>
                    <Col>
                        </Col>    
                        <Col>
                        </Col>    
                        <Col>
                        { verified ? <Button variant="secondary" onClick={approveCredHandler} block>Approve</Button> : '' }
                        </Col>
                        <Col>
                        </Col>                        
                        <Col>
                        </Col>                        
                    </Row>
                    <br></br>
                </Container>
            </div>   
    <br></br>            

            <div id="blockVerified">
                <Container>
                    <Row>
                        <Col>
                        </Col>    
                        <Col>
                        </Col>                         
                        <Col>
                            { approved ? <strong>Name:</strong> : ''} 
                        </Col>                        
                        <Col>
                            { approved ? 'Moayyad Alfaris' : '' } 
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                        </Col>    
                        <Col>
                        </Col>                                                                
                    </Row>    
                </Container>
            </div>    
    </>
);
}

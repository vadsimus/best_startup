import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Slider from './Components/Slider'
import Jumbotron from './Components/Jumbodron';

import first_image from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';


export const Home = () => (
    <>
        <Slider />
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={first_image}/>
                        <Card.Body>
                            <Card.Title>
                                best_startup
                            </Card.Title>
                            <Card.Text>
                                This is the best way to start your career in IT
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={second}/>
                        <Card.Body>
                            <Card.Title>
                                best_startup
                            </Card.Title>
                            <Card.Text>
                                This is the best way to start your career in IT
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={third}/>
                        <Card.Body>
                            <Card.Title>
                                best_startup
                            </Card.Title>
                            <Card.Text>
                                This is the best way to start your career in IT
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={fourth}/>
                        <Card.Body>
                            <Card.Title>
                                best_startup
                            </Card.Title>
                            <Card.Text>
                                This is the best way to start your career in IT
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
        <Jumbotron />
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col md={6}>
                    <img src={third} height={400} alt='the third slide'/>
                </Col>
                <Col md={5}>
                    <h2>The brst startup</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id quam est. Proin ante mauris, laoreet in elit ut, auctor rutrum justo. Duis pharetra eros leo, malesuada tempor lacus vehicula sit amet. Sed non ante dui. Nam tempus diam sed lectus luctus, sit amet auctor diam blandit. In enim urna, dictum in posuere non, ultrices sit amet magna. Sed lacus lorem, laoreet eget ornare sit amet, consequat vel libero.
</p>
                </Col>
            </Row>
        </Container>
    </>
)
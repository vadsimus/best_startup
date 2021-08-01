import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Slider from './Components/Slider'

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
                        
                        <Card.Body>
                            <Card.Img variant='top' src={second}/>  
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
                        
                        <Card.Body>
                            <Card.Img variant='top' src={third}/>  
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
                        
                        <Card.Body>
                            <Card.Img variant='top' src={fourth}/>  
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
    </>
)

import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Form, Modal} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

export default function Navibar() {
    
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Best Startup</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link href="/githubUsers">Github Users</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/githubUsers">Github Users</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/about">Separated link about</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                        <Button variant='btn btn-dark' className='mr-2' onClick={handleShow}>Log In</Button>
                        <Button variant='btn btn-dark'onClick={handleShow}>Sign Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Styles>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Label>Email adress</Form.Label>
                            <Form.Control type='email' palceholder='Enter email'/>
                            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' palceholder='Enter password'/>
                        </Form.Group>
                        <Form.Group controlId='fromBasicCheckbox'>
                            <Form.Label>Password</Form.Label>
                            <Form.Check type='checkbox' label='remember me'/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>




            {/* <Styles>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand className='mr-auto'>Best Startup</Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                                <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                            </Nav>
                            <Nav className='justify-content-end'>
                                <Button variant='primary' className='mr-2'>Log In</Button>
                                <Button variant='primary'>Sign Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </Styles> */}
        </>
    )
}

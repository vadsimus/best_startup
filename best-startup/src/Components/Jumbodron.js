import React from 'react'
import  { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import first_image from '../images/first.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${first_image}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.3;
        position: absolute;
        top: 0;
        left: 0;
        bottom:0;
        right:0;
        z-index: -1;
    }
`

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container style={{paddingTop: '5rem', paddingBottom: '2rem'}}>
            <h1>The best Startup</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id quam est. Proin ante mauris, laoreet in elit ut, auctor rutrum justo. Duis pharetra eros leo, malesuada tempor lacus vehicula sit amet. Sed non ante dui. Nam tempus diam sed lectus luctus, sit amet auctor diam blandit. In enim urna, dictum in posuere non, ultrices sit amet magna. Sed lacus lorem, laoreet eget ornare sit amet, consequat vel libero.
            </p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;
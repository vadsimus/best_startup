import { Carousel } from 'react-bootstrap';
import React from 'react';
import {} from 'react-bootstrap';
import first_image from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
import fourth from '../images/fourth.jpg';



export default function Slider() {


    return (
        <Carousel fade>
            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className='d-block w-100'
                    src={first_image}
                    alt='First image_alt'
                />
                <Carousel.Caption>
                    <h3>Best Startup</h3>
                    <p>Programming everywere</p>
                </Carousel.Caption>
                
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className='d-block w-100'
                    src={second}
                    alt='First image_alt'
                />
                <Carousel.Caption>
                    <h3>Best Startup</h3>
                    <p>Programming everything</p>
                </Carousel.Caption>
                
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className='d-block w-100'
                    src={third}
                    alt='First image_alt'
                />
                <Carousel.Caption>
                    <h3>Best Startup</h3>
                    <p>Programming yourself :)</p>
                </Carousel.Caption>
                
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className='d-block w-100'
                    src={fourth}
                    alt='First image_alt'
                />
                <Carousel.Caption>
                    <h3>Best Startup</h3>
                    <p>The best startup</p>
                </Carousel.Caption>
                
            </Carousel.Item>
        </Carousel>
    )
};
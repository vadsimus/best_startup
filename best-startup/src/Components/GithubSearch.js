import React from 'react'
import  { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import github from '../images/Github.jpeg';
import styled from 'styled-components';
import { useState } from 'react';
import '../App.css'

const Styles = styled.div`
    .jumbo {
        background: url(${github}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: 2;
    }
`

function GithubSearch(props) {

    const [ inputed, setInputed ] = useState('')

    return (
    <>
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='github-name'>
                {
                    inputed.split('').map((char, i) => (
                        <div className='char d-inline-block' key={i}>{char}</div>
                    ))
                }
            </div>
            <Container style={{paddingTop: '5rem', paddingBottom: '2rem'}}>
            <div className="row g-3 align-items-center ">
                <div className="col-auto">
                    <input className="form-control m-3 col-auto" 
                        type="search" 
                        placeholder="Github nickname" 
                        aria-label="Search" 
                        onChange={(e)=>{setInputed(e.target.value)}}/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-outline-success m-3 col-auto" onClick={()=>{props.SearchButtonHandler(inputed)}}>Search</button>
                </div>
            </div>
            </Container>
        </Jumbo>
    </Styles>
    </>
)}

export default GithubSearch;

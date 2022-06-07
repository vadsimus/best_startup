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
            <div  style={{paddingTop: '7rem', paddingLeft: '5rem', width: '27rem'}}>
                    <input className="form-control m-1 d-inline-block me-0" 
                        style={{width: '14rem'}}
                        type="search" 
                        placeholder="Github nickname" 
                        aria-label="Search" 
                        onChange={(e)=>{setInputed(e.target.value)}}/>
                    <button className="btn btn-outline-success m-3" onClick={()=>{props.SearchButtonHandler(inputed)}}>Search</button>
            </div>
        </Jumbo>
    </Styles>
    </>
)}

export default GithubSearch;

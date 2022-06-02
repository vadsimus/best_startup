import React, { useState } from 'react'
import { Container, Row, Card, Table, Button } from 'react-bootstrap'

function Users() {
    const [ search, setSearch ] = useState(0)
    const [ output, setOutput ] = useState('[]')
    const [ avatar, setAvatar ] = useState({})
    const [ visible, setVisible ] = useState(false)


function SearchButtonHandler() {
    fetch('https://api.github.com/users/' + search )
    .then(response => response.json())
    .then(user => {
        setAvatar({
            'name': user.name,
            'avatar_url': user.avatar_url,
            'bio': user.bio,
            'html_url': user.html_url
        })
        setVisible(true)
    })


    fetch('https://api.github.com/users/' + search + '/repos')
    .then(response => response.json())
    .then(repos => {
        let q = []
        repos.forEach((elem) => {
            console.log(elem)
            q.push(elem)
            })
        setOutput(JSON.stringify(q))
        
        }
        )
    }

    return (
        <>
        <h1>Enter Your github nickname</h1>
        <nav class="navbar navbar-light bg-light">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
            <button class="btn btn-outline-success my-2 my-sm-0" onClick={SearchButtonHandler}>Search</button>
        </nav>
    


    {visible && <div className='d-flex flex-row'>


        <Card style={{ width: '18rem' }} className='m-3'>
    <Card.Img variant="top" src={avatar.avatar_url} />
    <Card.Body>
        <Card.Title>{avatar.name}</Card.Title>
        <Card.Text>
        {avatar.bio}
        </Card.Text>
        <Button variant="primary"><a href={avatar.html_url} class="text-white">View Page</a></Button>
    </Card.Body>
    </Card>
    <Table striped bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Repo Name</th>
      <th>Language</th>
      <th>Created</th>
      <th>Last Push</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {   
        JSON.parse(output).map( (item, index) => (
             
            <tr>
                <td>{index+1}</td>
                <td><a href={item.html_url}>{item.name}</a></td>
                <td>{item.language}</td>
                <td>{Math.ceil((Date.now() - Date.parse(item.created_at))/(1000 * 3600 * 24))} days ago</td>
                <td>{Math.ceil((Date.now() - Date.parse(item.pushed_at))/(1000 * 3600 * 24))} days ago</td>
                <td>{item.description}</td>
                
                
            </tr>
                
            )
            )
    }
  </tbody>
    </Table>

    </div> }
    </>
    )
}


export {Users}

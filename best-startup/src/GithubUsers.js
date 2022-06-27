import React, { useState } from 'react'
import Jumbotron from './Components/Jumbodron'
import GithubSerch from './Components/GithubSearch'
import { Card, Table, Button } from 'react-bootstrap'


function GithubUsers() {
    const [ output, setOutput ] = useState('[]')
    const [ avatar, setAvatar ] = useState({})
    const [ visible, setVisible ] = useState(false)

    function SearchButtonHandler(inputed_search) {
        if (inputed_search) {
        fetch('https://api.github.com/users/' + inputed_search )
        .then(response => response.json())
        .then(user => {
            
            if (user.name || user.login) {
            setAvatar({
                'name': user.name || user.login,
                'avatar_url': user.avatar_url,
                'bio': user.bio,
                'html_url': user.html_url,
                'location': user.location
            })
            console.log(user)
            
            setVisible(true)
            } else {
                setVisible(false)
            }
        }
        )

        fetch('https://api.github.com/users/' + inputed_search + '/repos')
        .then(response => response.json())
        .then(repos => {
            if (repos.message != 'Not Found'){
            let q = []
            repos.forEach((elem) => {
                q.push(elem)
                })
                
                setOutput(JSON.stringify(q))
            } else {
                setOutput('[]')
            }
            }
            )
        } else {
            setVisible(false)
        }
    } 
    
    return (
        <>
            {!visible && <Jumbotron/>}
            <GithubSerch SearchButtonHandler={SearchButtonHandler}/>

            {visible && <div className='d-flex flex-row'>
                <Card style={{ width: '18rem' }} className='m-3'>
                <Card.Img variant="top" src={avatar.avatar_url} />
                <Card.Body>
                    <Card.Title>{avatar.name}</Card.Title>
                    <Card.Text className='mb-0'> {avatar.location}</Card.Text>
                    <Card.Text>{avatar.bio}</Card.Text>
                    <Button variant="primary"><a href={avatar.html_url} class="text-white">View Page</a></Button>
                </Card.Body>
                </Card>
                <Table striped bordered hover className='mt-3 me-3'>
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
                                ))
                        }
                    </tbody>
                </Table>
            </div> 
            }
        </>
    )
}

export {GithubUsers}

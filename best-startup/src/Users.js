import React, { useState } from 'react'

function Users() {
    const [ search, setSearch ] = useState(0)
    const [ output, setOutput ] = useState('[]')


function SearchButtonHandler() {
    fetch('https://api.github.com/users/' + search + '/repos')
    .then(response => response.json())
    .then(repos => {
        let q = []
        repos.forEach((elem) => {
            q.push(elem.name)
            })
        setOutput(JSON.stringify(q))
        
        }
        )
    }

    return (
        <>
        <h1>Page FOR Users</h1>
        <nav class="navbar navbar-light bg-light">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
        <button class="btn btn-outline-success my-2 my-sm-0" onClick={SearchButtonHandler}>Search</button>
    </nav>

    <div>
        {JSON.parse(output).map( (item, index) => (
            <div key={index}>{item}</div>
        )
        )
}
           
    </div>
    </>
    )
}


export {Users}

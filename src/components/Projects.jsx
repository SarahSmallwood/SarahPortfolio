import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Projects() {
    const [user, setUser] = useState("SarahSmallwood")
    const [repo, setRepo] = useState([])

    useEffect(() => {
        const getRepo = async () => {
            let res = await axios.get(`http://api.github.com/users/${user}/repos`);
            const data = await res.json()
            setRepo(data.user.repo)
        }
        getRepo()
    },[])
  return (
    <div>
    <h1 className='projectTitle'> Sarah's Portfolio Projects </h1>
    <div>
        {user.map.repo}
    </div>
    </div> 
    

  )
}

export default Projects
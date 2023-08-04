import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Projects() {
    const [user, setUser] = useState("SarahSmallwood")
    const [repo, setRepo] = useState([])

     const getUser = async () => {
        let res = await axios.get(`http://api.github.com/users/${user}`);
        setUser(res.user);
        }
    const getRepo = async () => {
        let res = await axios.get(`http://api.github.com/users/${user}/repos`);
        setRepo(res.user.repo);
    }

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
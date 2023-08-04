import React, { useState, useEffect } from 'react';


function Projects() {
    const [user, setUser] = useState("SarahSmallwood")
    const [repo, setRepo] = useState([])

    useEffect(() => {
        const fetchRepo = async () => {
            const res = await fetch(`http://api.github.com/users/${user}/repos`)
            const data = await res.json()
            setRepo(data.user.repo)
        }
        fetchRepo()
    },[])
  return (
    <div>
    <h1 className='projectTitle'> Sarah's Portfolio Projects </h1>
    <div>
        {data.map.repo}
    </div>
    </div> 
    

  )
}

export default Projects
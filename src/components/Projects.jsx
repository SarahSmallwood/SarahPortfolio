import React, { useState, useEffect } from 'react';


function Projects() {
    const [user, setUserRepo] = useState("SarahSmallwood")
    const [repo, setRepo] = useState([])

    useEffect(() => {
        const fetchRepo = async () => {
            const res = await fetch(`http://api.github.com/users/${user}/repos`)
            const data = await res.json()
            setRepo(data)
        }
        fetchRepo()
    },[])
  return (
    <div>
    <h1 className='projectTitle'> Sarah's Portfolio Projects </h1>
    <div>
        {repo.map.data}
    </div>
    </div> 
    

  )
}

export default Projects
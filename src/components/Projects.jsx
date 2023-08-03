import React, { useState, useEffect } from 'react';


function Projects() {
    const [user, setUserRepo] = useState([])
    const [repo, setRepo] = useState("SarahSmallwood")

    useEffect(() => {
        const fetchRepo = async () => {
            const res = await fetch(`http://api.github.com/users/SarahSmallwood/repos`)
            const data = await res.json()
            setUserRepo(data)
        }
        fetchRepo()
    },[])
  return (
    <div>
    <h1 className='projectTitle'> Sarah's Portfolio projects </h1>
    <div>
        {data.map.id}
    </div>
    </div> 
    

  )
}

export default Projects
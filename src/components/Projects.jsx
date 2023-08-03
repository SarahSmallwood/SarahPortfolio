import React, { useState, useEffect } from 'react';


function Projects() {
    const [user, setUserRepo] = useState([])
    const [repo, setRepo] = useState("SarahSmallwood")

    useEffect(() => {
        const fetchRepo = async () => {
            const res = await fetch(`http://api.github.com/users/${repo}/repos?page=1&per_page=10&sort=updated`)
            const data = await res.json()
            setUserRepo(data)
        }
        fetchRepo()
    },[])
  return (
    <h1>{repo.legnth}</h1>
  )
}

export default Projects
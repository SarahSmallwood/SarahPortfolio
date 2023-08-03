import React, { useState, useEffect } from 'react'

function ApiCall() {
    const [items, setItems] = useState([])
    const [repo, setRepo] = useState("SarahSmallwood")

    useEffect(() => {
        const fetchRepo = async () => {
            const res = await fetch(`http://api.github.com/users/SarahSmallwood/repos?page=1&per_page=10&sort=updated`)
        }
    },[])





  return (
    <div>ApiCall</div>
  )
}

export default ApiCall
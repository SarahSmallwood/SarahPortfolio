import React, { useState, useEffect } from 'react'

function ApiCall() {
    const [items, setItems] = useState([])
    const [repo, setRepo] = useState()

    useEffect(() => {
        console.log('repo')
    },[repo])





  return (
    <div>ApiCall</div>
  )
}

export default ApiCall
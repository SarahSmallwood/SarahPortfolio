import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhotoGallery() {
    const [gallery, setGallery] = useState('')

    const getRepos = async () => {
        let res = await axios.get(`https://api.github.com/users/SarahSmallwood/repos`);

        console.log(res);

        setRepo(res.data);


}
useEffect(() => {
    getRepos();
},[])
}


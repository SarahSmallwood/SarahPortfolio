import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiCall() {

    // const [user, setUser] = useState("SarahSmallwood")
    const [repo, setRepo] = useState('')

    // const getUser = async () => {
    //     let res = await axios.get(`http://api.github.com/users/${user}/repos`);
    //     setUser(res.user);
    // }
    const getRepos = async () => {
        let res = await axios.get(`https://api.github.com/users/SarahSmallwood/repos`);

        console.log(res);
        
        
        
        // res.data.array.map(x => x.html_url);

        setRepo(res.data);
        // console.log(res.array.forEach(element => {
        //     console.log(element)
        // }))
    }
    //console.log(`${user}`);
    

    // let initial = true 

    useEffect(() => {
        getRepos();
    },[])


    const loaded = () => {
        return (
            <div className='projects'>
                <div className='name'>
                <h3>{repo[9].name}</h3>
                <h3>{repo[11].name}</h3>
                <h3>{repo[14].name}</h3>
                <h3>{repo[15].name}</h3>
                <h3>{repo[16].name}</h3>
                <h3>{repo[20].name}</h3>

                </div>
                <div className='url'>
                <h3>{repo[9].html_url}</h3>
                <h3>{repo[11].html_url}</h3>
                <h3>{repo[14].html_url}</h3>
                <h3>{repo[15].html_url}</h3>
                <h3>{repo[16].html_url}</h3>
                <h3>{repo[20].html_url}</h3>
                </div>
                <div className='img'>
                    <img src="" about='alt' />
                    <img src="" about='alt' />
                    <img src="" about='alt' />
                    <img src="" about='alt' />
                    <img src="" about='alt' />
                    <img src="" about='alt' />
                </div>
            </div>
        );
    }
    const loading = () => {
        return 
        <h1>Loading...</h1>;
    };
  return repo ? loaded() : loading();
}

export default ApiCall
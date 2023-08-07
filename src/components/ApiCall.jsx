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
                {/* <div className='name'>
                <h3>{repo[9].name}</h3>
                <h3>{repo[11].name}</h3>
                <h3>{repo[14].name}</h3>
                <h3>{repo[15].name}</h3>
                <h3>{repo[16].name}</h3>
                <h3>{repo[20].name}</h3> */}

                
                <div className='url'>
                <a className='apiLink' href={repo[9].html_url}> {repo[9].html_url} </a>
                <a className='apiLink' href={repo[11].html_url}> {repo[11].html_url} </a>
                <a className='apiLink' href={repo[14].html_url}> {repo[14].html_url} </a>
                <a className='apiLink' href={repo[15].html_url}> {repo[15].html_url} </a>
                <a className='apiLink' href={repo[16].html_url}> {repo[16].html_url} </a>
                <a className='apiLink' href={repo[20].html_url}> {repo[20].html_url} </a>
                </div>
                <div className='img'>
                    <img src="https://media.discordapp.net/attachments/1135935108650635327/1137931317397430312/TriviaGame.png?width=1828&height=699" about='alt' />
                    <img src="https://media.discordapp.net/attachments/1135935108650635327/1137933878577868871/per.png?width=1559&height=840" about='alt' />
                    <img src="https://media.discordapp.net/attachments/1135935108650635327/1137933879957803140/perscholas.png?width=1157&height=840" about='alt' />
                    <img src="https://media.discordapp.net/attachments/1135935108650635327/1137933878938587147/space.png?width=1828&height=770" about='alt' />
                    <img src="https://media.discordapp.net/attachments/1135935108650635327/1137933879488032849/starbucks.png?width=1535&height=840" about='alt' />
                    <img src="https://media.discordapp.net/attachments/1135935108650635327/1137933878267494491/wholefoods.png?width=1551&height=838" about='alt' />
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
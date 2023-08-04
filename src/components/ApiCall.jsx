import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Projects from './Projects';


function ApiCall() {

    let res;

    // const [user, setUser] = useState("SarahSmallwood")
    const [repo, setRepo] = useState('')

    // const getUser = async () => {
    //     let res = await axios.get(`http://api.github.com/users/${user}/repos`);
    //     setUser(res.user);
    // }
    const getRepos = async () => {
        res = await axios.get(`https://api.github.com/users/SarahSmallwood/repos`);

        console.log(res.data[0].html_url);
        
        
        
        // res.data.array.map(x => x.html_url);

        setRepo(res.repo);
        // console.log(res.array.forEach(element => {
        //     console.log(element)
        // }))
    }
    //console.log(`${user}`);
    

    // let initial = true 

    useEffect(() => {

        // getUser();
        getRepos();

        // if (initial){
        //     const getUser= async () => {
        //         let res = await axios.get(`http://api.github.com/users/${user}`);
        //         setUser(res.user);
        //     }
        //     const getRepos = async () => {
        //         let res = await axios.get(`http://api.github.com/users/${user}/repos`);
        //         setRepo(res[0].html_url);
        //     }
        // }
    })
    const loaded = () => {
        return (
            <div className='projects'>
                <Projects />
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
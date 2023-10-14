import React from 'react';
import {useState} from 'react';

function GithubButton() {
    function handleChange() {
        console.log('Button Clicked');

        let changeButton = document.querySelector(".buttons");
         if(changeButton.style.display == 'none'){
                changeButton.style.display = 'block';
        }else {
            changeButton.style.display = 'none';
        }
        };
    handleChange();
    
  return (

    <div className='buttons'>
        <button onClick={handleChange()} className='buttonOne'>
        Link to Github 
            <img className="gitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            <a url="https://github.com/SarahSmallwood/TravelBlogApp"></a>
        </button>
        <button className='buttonTwo'>
            Link to Github 
            <img className="gitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            <a url="https://github.com/SarahSmallwood/WholeFoodsMockUP"></a>
        </button>
        <button className='buttonThree'>
        Link to Github 
            <img className="gitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            <a url="https://github.com/SarahSmallwood/ResumeMockUP"></a>
        </button>
        <button className='buttonFour'>
        Link to Github 
            <img className="gitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            <a url="https://github.com/SarahSmallwood/perScholasMOCKUP"></a>
        </button>
        <button className='buttonFive'>
        Link to Github 
            <img className="gitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            <a url="https://github.com/SarahSmallwood/WorldTrivia"></a>
        </button>
        <button className='buttonSix'>
        Link to Github 
            <img className="gitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            <a url="https://github.com/SarahSmallwood/spaceMINIGame"></a>
        </button>

    </div>
  )
};

export default GithubButton;
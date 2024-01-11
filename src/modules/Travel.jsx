// src/components/Layout.js
import React from 'react';
import TravelGallery from '../components/TravelGallery';

const Travel = () => {
  return (
    <div className="layout">
      <TravelGallery />
      <div className="grid-container">
        {/* <h3 className='photoHead'>Egypt</h3> */}
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Egypt/IMG_8819.jpg"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Egypt/IMG_7830.JPG"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Egypt/IMG_7792.JPG"/>

        {/* <h3 className='photoHead'>Costa Rica</h3> */}
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Costa%20Rica/IMG_6979.jpg"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Costa%20Rica/IMG_6776%203.jpg"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Costa%20Rica/IMG_2130.HEIC"/>

        {/* <h3 className='photoHead'>Spain</h3> */}
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Spain/IMG_5040.JPG?updatedAt=1696791324903"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Spain/IMG_7370.JPG?updatedAt=1696791018048"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Spain/198690B3-F23B-46B8-8B13-61B2C32FDD6C.JPG?updatedAt=1696790710343"/>

        {/* <h3 className='photoHead'>Portugal</h3> */}
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5175.JPG?updatedAt=1696792082419"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5280.JPG?updatedAt=1696792055140"/>
        <img className="photoCard" alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5323.JPG?updatedAt=1696792018863"/>
      </div>
    </div>
  );
};

export default Travel;
 
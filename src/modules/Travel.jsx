// src/components/Layout.js
import React from 'react';
import TravelGallery from '../components/TravelGallery';

const Travel = () => {
  return (
    <div className="layout">
      <h1>Image Gallery</h1>
      <div className="grid-container">
        <TravelGallery />
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5298.JPG?updatedAt=1696792185109"/>

      </div>
    </div>
  );
};

export default Travel;
 
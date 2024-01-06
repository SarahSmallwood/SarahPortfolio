// src/components/Layout.js
import React from 'react';
import TravelGallery from '../components/TravelGallery';

const Travel = () => {
  return (
    <div className="layout">
      <h1>Image Gallery</h1>
      <div className="grid-container">
        <TravelGallery />
      </div>
    </div>
  );
};

export default Travel;
 
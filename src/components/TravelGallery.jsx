// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IKImage, IKContext } from 'imagekitio-react';

const TravelGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://ik.imagekit.io/v64tipjbn',
          {
            headers: {
              Authorization: 'public_1q+LBemKf5kjuf0fX4lrhrKqxEE=',
            },
          }
        );
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <IKContext 
        publicKey="public_1q+LBemKf5kjuf0fX4lrhrKqxEE="
        privateKey="private_mAxOPs37DJOZbt1tH4pncHvBVJw="
        urlEndpoint="https://ik.imagekit.io/v64tipjbn"
        transformationPosition="path"
        authenticationEndpoint="http://localhost:3000/TravelGallery">
        <IKImage path="/https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5298.JPG" />
        

        </IKContext>
      ))}
    </div>
  );
};

export default TravelGallery;

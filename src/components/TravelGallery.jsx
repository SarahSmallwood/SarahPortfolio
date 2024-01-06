// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IKImage } from 'react-imagekit';

const TravelGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.imagekit.io/v1/images',
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
        <IKImage
          key={image._id}
          path={image.path}
          transformation={[{ height: 200, width: 200 }]}
        />
      ))}
    </div>
  );
};

export default TravelGallery;

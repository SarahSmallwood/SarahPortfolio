import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Gallery() {
  const data = [
    {
      image: "https://cdn.discordapp.com/attachments/1135935108650635327/1135936860091326514/IMG_4360_3.JPG",
      caption: "Spain",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135936862813429883/IMG_2950.jpg?width=1067&height=800",
      caption: "Thailand",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135936861190234182/IMG_6776.jpg?width=545&height=800",
      caption: "Costa Rica",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135936861764862014/IMG_8670.JPG?width=556&height=800",
      caption: "Spain",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135936860644982846/F8F553BD-AE6B-48BA-BF92-B4AF6855606A.JPG?width=1067&height=800",
      caption: "Spain",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135996988408737823/IMG_5295.JPG?width=1155&height=800",
      caption: "Algarve, Portugal",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135996989113376788/IMG_5524.jpg?width=809&height=800",
      caption: "Iceland",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1135996989671223306/IMG_9848.jpg?width=600&height=800",
      caption: "Arches National Park Utah",
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1136673644056150156/9A3E1575-4E3B-4252-BD85-90DBDFB1A661.jpg?width=1115&height=840",
      caption: "Belize",
    },
  ];

return (
  <div className="gallery">
    
      <h1 className='galleryHead'>Travel Photography Gallery</h1>
      
        <Carousel className="travel"
          data={data}
          thumbnails={true}
          thumbnailWidth="100px"
          thumbnailHeight="100px"
        />
      </div>
);
}



export default Gallery
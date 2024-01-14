import React from 'react';
import { Carousel } from 'react-carousel-minimal';
//import GithubButton from '../components/GithubButton';

function Gallery() {
  const data = [
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1161389038486437888/Capstone_2.png?ex=65381ed4&is=6525a9d4&hm=ea67811cb147be26fdb75f6fd33998199f6ab97b3aae863bfce3f2308966fba2&=&width=1601&height=880",
      caption: "Travel Blogging App. A full MERN Stack application with CRUD Operations",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1137933878267494491/wholefoods.png?ex=6535d902&is=65236402&hm=4d2cfb26c0c94a4413a485c1c1228d03f71f5e14af7615117d4640ce4072565e&=&width=1628&height=880",
      caption: "Whole Foods Market MockUP",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1161848974219673731/ResumeMockUp.png?ex=6539cb2d&is=6527562d&hm=5b723f4388c8784fb5b2c5e6583761dd94f60064ac36b5915dbe682fa21bb07b&=&width=1566&height=880",
      caption: "Resume MockUP",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1137933878577868871/per.png?ex=6535d902&is=65236402&hm=876df396f85e587cbc6ba18014e6d34ba760918839573f41682db7876c11f362&=&width=1634&height=880",
      caption: "Per Scholas Website Responsive Design MockUp",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1137931317397430312/TriviaGame.png?ex=6535d69f&is=6523619f&hm=c3c4a9435fab5c501bea28e8fc15563d8a97dae8d00c40173f38c291df4f8326&=&width=1806&height=690",
      caption: "World Continent Trivia Game",
      
    },
    {
      image: "https://media.discordapp.net/attachments/1135935108650635327/1137933878938587147/space.png?ex=6535d902&is=65236402&hm=714430976c503e1d0cca36d8bf4496860a44101f3bb44535f2b53236bb2f3181&=&width=1806&height=761",
      caption: "SpaceBattle Game JavaScript Basic",
      
    }
  ];

return (
  <div className="gallery">
    
      <h1 className='galleryHead'>SOFTWARE DEVELOPMENT PORTFOLIO</h1>
      
        <Carousel
          data={data}
          thumbnails={true}
          thumbnailWidth="120px"
          thumbnailHeight="160px"
          border= "black"
          font-family= "Bodoni Moda"
        />
        {/* <GithubButton/> */}

      </div>
);
}



export default Gallery
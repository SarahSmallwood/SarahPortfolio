import React from 'react';
import ContactButton from '../components/ContactButton';

function AboutMe() {
  return (
    <div className='AboutMe'>
        <div className='left'>
          <h2 className='sarah'>LET'S DESIGN SOMETHING INCREDIBLE </h2>
          <p className='about'>
          sarah sarah sarah
          </p>
          <ContactButton/>
        </div>
        <div className='right'>
          <img alt='portrait' className='sarahPic'src='https://media.discordapp.net/attachments/1135935108650635327/1135936946225557624/7C07E77B-A612-4BDB-A2A0-0CB41D655CD9.JPG?ex=65afc838&is=659d5338&hm=d1f1b12e3ab32fac2344d69953a6d90ecffd3fcc6c95669452e04228acb3ccb9&=&format=webp&width=600&height=405'/>
        </div>
    </div>
  )
}

export default AboutMe
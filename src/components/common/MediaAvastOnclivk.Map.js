import React, { useState } from 'react';
import Accordion from './MediaAvastOnclivk';

const AppMob = () => {
  const [showPopup, setShowPopup] = useState(false)
  const accordionData = [
    {
      title: 'For home',
      content: `Products for PC and bmobile phone protextion`
    },
    {
      title: 'For businnes',
      content: `Protect your business with Avast`
    },
    {
      title: 'For partners',
      content: `Partner with Avast and your business`,
    },
    {
      title: 'About us',
      content: `Careers, inverstors, media, contact`,
    },
     {
      title: 'Blogs',
      content: `Avademy, Blog, Decoded, Forum`,
     },
     {
      img: './img/imagesUSA.png',
      title: 'United States (English)',
      
     }

    
  ];

  return (
    <div>

      <button className="img_openmeniu_media" onClick={() => setShowPopup(!showPopup)} > <img className='x' src={showPopup ? "./img/x.images.png": "./img/burger.jpg"}/></button>

      {
        showPopup &&
        <div>
          <div className="accordion">

            {accordionData.map(({img, title, content}) => (
              <Accordion img ={img} title={title} content={content} />
            ))}
            
          </div>
        </div>
      }
    </div>
  );
};

export default AppMob;
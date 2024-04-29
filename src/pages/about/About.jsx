import React from "react";
import "./about.css"

const About = ( ) =>{
  const cardData = [
    {
      imgSrc: '/Images/mfdivide.webp',
      icons: [
        { src: '/Images/1-icon.webp', text: 'Optimized design of plate for battery capacity' },
        { src: '/Images/2-icon.webp', text: ' Enveloped separator for low electrical resistance' },
        { src: '/Images/3-icon.webp', text: ' Advanced center lug technology &amp; cast on strap' },

      ],
    },
    {
      imgSrc: '/Images/plates-blue.webp',
      icons: [
        { src: '/Images/1-icon.webp', text: 'Optimized design of plate for battery capacity' },
        { src: '/Images/2-icon.webp', text: ' Enveloped separator for low electrical resistance' },
        { src: '/Images/3-icon.webp', text:  'Advanced center lug technology &amp; cast on strap' },

      ],
    },
    {
      imgSrc: '/Images/flamejpg320h.webp',
      icons: [
        { src: '/Images/1-icon.webp', text: 'Optimized design of plate for battery capacity' },
        { src: '/Images/2-icon.webp', text: ' Enveloped separator for low electrical resistance' },
        { src: '/Images/3-icon.webp', text: ' Advanced center lug technology &amp; cast on strap' },
      ],
    },
  ];
  return (
    <>
    <section className='batteryStructureSec'>
          {cardData.map((card, index) => (
            <div key={index} className='card'>
              <div className="btrImage">
              <img src={card.imgSrc} alt={`Card ${index}`} />
              </div>
              <div className="details">
              {card.icons.map((icon, iconIndex) => (
                  <div key={iconIndex} className='detail'>
                  <img src={icon.src} alt={`Icon ${iconIndex + 1} of card ${index}`} />
                  <p>{icon.text}</p>
                </div>
              ))}
              </div>
            </div>
          ))}
    </section>

    </>
  )
} 
export default About
import React from 'react'
import './Products.css';

const products = () => {

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
      <div className="hero-section">
      <img src="Images/headerBackground.svg" alt="" />
        <div className="content">
            <h1> 100% MAINTENANCE-FREE </h1>
            <p>AUTOMOTIVE BATTERIES</p>

            <div className="check">
                <img src="Images/240_F_241625776_KKoZinrSO6iYNzrPaK9NrtxbmxcwvPh6.jpg" className="checkbox" alt="" />
                <p>READY TO USE</p>
            </div>
            <div className="check1">
                <img src="Images/240_F_241625776_KKoZinrSO6iYNzrPaK9NrtxbmxcwvPh6.jpg" className="checkbox" alt="" />
                <p>QUICK ENGINE START</p>
            </div>
        </div>
    </div>

    <section class="Cards">
        <div class="row-items">
            <div class="container-box">
                <div class="container-img">
                    <img src="/Images/MF-Icon.webp" alt="" width="100%" />
                </div>
                <h3>100% MAINTENANCE-FREE</h3>
                <p>No hassle of checking and filling electrolyte throughout its life time.</p>
            </div>
            <div class="container-box">
                <div class="container-img">
                    <img src="/Images/warranty-icon.webp" alt="" width="100%" />
                </div>
                <h3>Ready-to-use</h3>
                <p>The battery comes charge and filling good quality electrolyte by manufacture</p>
            </div>
            <div class="container-box">
                <div class="container-img">
                    <img src="Images/Korean-Icon.webp" alt="" width="100%" />
                </div>
                <h3>Cold Crank Amperage</h3>
                <p>daewoo Battery comes equipped with high CCA that perfectly withstands cold weather </p>
            </div>  
        </div>
    </section>

    <section class="boxes-text">
        <div class="text">
            <h1>DRIVE WITH <br /> PEACE OF MIND</h1>
        </div>
        <div class="text1">
         <p class="para">100% Maintenance-free battery offers supreme convenience with extraordinary spill proof feature on-board because of its double seal.It completely eliminates of and re-filling electrolyte throughout its lifetime. Highest CCA provides fastest engine startup even in extreme cold weather conditions. Its ready to use as it .</p>

        </div>
    </section>

    <section class="battery-container">
        <div class="batteryImage">
            <img src="Images/download (1).jpeg" alt="" />
            <h1>DIN-888</h1>
        </div>
        <div class="batteryImage">
            <img src="Images/download (2).jpeg" alt="" />
            <h1>DIN-666</h1>
        </div>
        <div class="batteryImage">
            <img src="Images/download (3).jpeg" alt="" />
            <h1>DLR/50</h1>
        </div>
        <div class="batteryImage">
            <img src="Images/images.jpeg" alt="" />
            <h1>DLR/55</h1>
        </div>
    </section>

    <section className='Battery-structure'>
      <div className='Service'>
        <div className='service-box'>
          {cardData.map((card, index) => (
            <div key={index} className='battery-img'>
              <img src={card.imgSrc} alt={`Card ${index}`} />
              {card.icons.map((icon, iconIndex) => (
                <div key={iconIndex} className={`icon-img${iconIndex + 1}`}>
                  <img src={icon.src} alt={`Icon ${iconIndex + 1} of card ${index}`} />
                  {icon.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default products


// {
//   headding:,
//   mainImg:,
// details:[
//   {
//     detail:
//   }
//   {
//     detail:
//   }
//     detail:
//     detail:
//   }
//   <div>
//     {str.indedx}
//   </div>
// ]
// }
  
// }
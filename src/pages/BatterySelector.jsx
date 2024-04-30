import React from 'react';
import './BatterySelector.css';

const BatterySelector = () => {
  return (
    <>

      <div className="hero-section">
      <img src="Images/headerBackground.svg" alt="" />
        <div className="content">
            <h1>100% MAINTENANCE-FREE</h1>
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

    <div className='content-container'>
      <img src="Images/battery-selector-bg-web.webp"/>
    </div>

    </>
  );
};

export default BatterySelector;

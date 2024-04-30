import React from 'react'
import './Home.css'
import '../component/HomeResponsive.css'
const Home = () => {
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

 <section class="text-container">
    <div class="container">
        <p class="centered-text">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words, etc.
        </p>
    </div>
 </section>

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

    <section class="image-container">
        <div class="car-image">
            <img src="Images/photo-1494976388531-d1058494cdd8.avif" alt="" width="400px" />
        </div>
         <div class="car-image">
            <img src="Images/photo-1502877338535-766e1452684a.avif" alt="" width="400px" />
        </div>
         <div class="car-image">
            <img src="Images/photo-1503376780353-7e6692767b70.avif" alt="" width="400px" />
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

    <section class="technology">
        <div class="technology-img">
            <div class="cards-img">
                <div class="technology-box">
                    <img src="Images/warranty-icon.webp" alt="" width="100%" />
                </div>
                <h3>1 YEAR REPLACEMENT WARRANTY</h3>
                <p>Proud Manufacture offering 1 year replacement <br /> Warranty</p>
            </div>
            <div class="cards-img">
                <div class="technology-box">
                    <img src="Images/ready-icon.webp" alt="" width="100%" />
                </div>
                <h3>Heaviest-Barrery Weight</h3>
                <p>Thicker Plates ensuring long life and a much Longer <br />back-up time</p>
            </div>
            <div class="cards-img">
                <div class="technology-box">
                    <img src="Images/Korean-Icon (1).webp" alt="" width="100%" />
                </div>
                <h3>Korean technology</h3>
                <p>State of the art producation facility with latest korean  <br />technology </p>
            </div>  
        </div>
    </section>

    <section class="boxes-text">
        <div class="text">
            <h1>LIVE WITH <br /> PEACE OF MIND</h1>
        </div>
        <div class="text1">
         <p class="para">100% Maintenance-free battery offers supreme convenience with extraordinary spill proof feature on-board because of its double seal.It completely eliminates of and re-filling electrolyte throughout its lifetime. Highest CCA provides fastest engine startup even in extreme cold weather conditions. Its ready to use as it .</p>

        </div>
    </section>

    <section class="homeimg">
        <div class="home-image">
            <img src="Images/download (9).jpeg" alt="" />
            <button class="home-button">HOME</button>
        </div>
        <div class="home-image">
            <img src="Images/download (7).jpeg" alt="" />
            <button class="home-button">OFFICE</button>
        </div>
        <div class="home-image">
            <img src="Images/download (8).jpeg" alt="" />
            <button class="home-button">SOLAR</button>
        </div>
    </section>

    <section class="Big-Battery">
        <div class="Big-Battery-img">
            <img src="Images/download (10).jpeg" alt="" />
        </div> <div class="Big-Battery-img">
            <img src="Images/download (11).jpeg" alt="" />
        </div> <div class="Big-Battery-img">
            <img src="Images/download (12).jpeg" alt="" />
        </div> <div class="Big-Battery-img">
            <img src="Images/download (13).jpeg" alt="" />
        </div>
    </section>
    
    </>
  )
}

export default Home

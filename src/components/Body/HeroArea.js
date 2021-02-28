import React from "react";
import Particles from 'react-particles-js'
function HeroArea() {
  return (
    <div id="headerImage" class="hero-area">
       <img src="assets/images/11.gif"  className="mainImage" />
      <div style={{zIndex:1}}><Particles 
      params={{
        particles:{
          number:{
            value:100,
            density:{
              enable:true,
              value_area:1000,
            }
          },
          shape:{
            type:"circle"
          },
          size:{
            value:"15",
            anim:{
              enable:true
            }
          },
          opacity:{
            value:"0.15",
            random:true
          },
          lineLinked:{
            
            enable:false,
            distance:"16",
          },
          move:{
            speed:"3.2"
          },
          
        },
        interactivity:{
          detectsOn:"canvas",
          events:{
            onHover:{
              enable:true
            },
            onClick:{
              enable:true
            }
          }
        }
      }}>
      </Particles></div>
     
      <div class="container">
        <div class="row">
          <div class="col-lg-5 d-flex align-self-center">
            <div class="left-content">
              <div class="content">
                {/* <img src="assets/images/logo.png" style={{position:"relative"}} className="mainImage" /> */}
                {/* <h5 class="subtitle">TRON 5X</h5> */}
                {/* <h1 class="title">TRON 5X</h1>
                <p class="text">
                Main purpose of the project is to
                creating a trusted MLM platform
                where you can easily invest and
                get high returns on your
                investment
                </p> */}
                {/* <div class="links">
                  <a href="index.html#" class="mybtn1 link1">
                    Get Started Now!
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            {/* <div class="hero-img2 d-block d-md-none">
              <img src="assets/images/banner.png" alt="" />
            </div> */}
            <div class="hero-img d-none d-md-block">
              {/* <img
                class="img-fluid full-image"
                src="assets/images/banner.png"
                alt=""
              /> */}
               {/* <img
               width="100%"
                class="shape phone"
                src="assets/images/banner.png"
                alt=""
              /> */}
              {/* <img
                class="shape man"
                src="assets/images/banner.png"
                alt=""
              /> */}
              {/*<img
                class="shape ripple"
                src="assets/images/h-shapes/ripple.png"
                alt=""
              />
              <img
                class="shape ripple2"
                src="assets/images/h-shapes/ripple1.png"
                alt=""
              />
              <img
                class="shape bitcoin1"
                src="assets/images/h-shapes/bitcoin1.png"
                alt=""
              />
              <img
                class="shape bitcoin2"
                src="assets/images/h-shapes/bitcoin2.png"
                alt=""
              />
              <img
                class="shape shape-icon"
                src="assets/images/h-shapes/shape.png"
                alt=""
              />
              <img
                class="shape award-bg"
                src="assets/images/h-shapes/award/bg.png"
                alt=""
              />
              <img
                class="shape award"
                src="assets/images/h-shapes/award/award.png"
                alt=""
              />
              <img
                class="shape gift-bg"
                src="assets/images/h-shapes/giftbox/bg.png"
                alt=""
              />
              <img
                class="shape gift"
                src="assets/images/h-shapes/giftbox/gift.png"
                alt=""
              />
              <img
                class="shape shield-bg"
                src="assets/images/h-shapes/shield/bg.png"
                alt=""
              />
              <img
                class="shape shield"
                src="assets/images/h-shapes/shield/shield.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;

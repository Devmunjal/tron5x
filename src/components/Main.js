import React from 'react'

import Header from './Header/MainHeader'
import HeroArea from './Body/HeroArea'
import Invest from './Body/Invest'
import Activities from './Body/Activities'
import GetStart from './Body/GetStart'
import Footer from './Footer/MainFooter'

function scroll(x){
  document.getElementById(`${x}`).scrollIntoView({behavior: 'smooth'});
}

function Main(){
    return(<>
    <div class="preloader" id="preloader">
      <div class="loader loader-1">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
    </div>
    <Header scroll={(x)=>scroll(x)}></Header>
    <HeroArea></HeroArea>
    <Invest></Invest>
    {/* <Activities></Activities> */}
    <GetStart id="videoContent"></GetStart>
    <Footer></Footer>
    </>)
}
export default Main;
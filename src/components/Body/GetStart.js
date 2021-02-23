import React,{useState} from 'react'

function GetStart(){
  const [displayNo, setdisplayNo] = useState()
    return(
        <>
        <div id="getStart" class="get-start">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex align-self-center">
            <div class="left-area">
              <div class="section-heading">
                <h5 class="subtitle">every day lots of wins</h5>
                <h2 class="title">be one of them</h2>
                <p class="text">
                  Get started in less than 5 min - no credit card required.Gain
                  early access to Dooplo and experience crypto like never
                  before.
                </p>
                <a href="index.html#" class="mybtn1">Play Now!</a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="right-image">
              <img src="assets/images/get-start.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="recent-winners">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div  class="section-heading">
              <h5 class="subtitle"></h5>
              <h2 class="title">Frequently Asked Question</h2>
              <p class="text" >
                We update our site regularly; more and more winners are added
                every day! To locate the most recent winner's information
              </p>
            </div>
          </div>
        </div>
        <div class="row" >
          <div onClick={()=>setdisplayNo(1)} class="col-lg-4">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Leroy Roy</h4>
                  <p class="date">01.08.2019</p>
                </div>
                <div class="right">
                  <p class="id">#5747e75482</p>
                </div>
              </div>
              <div style={{display:`${displayNo==1?'block':'none'}`}}  class="bottom-area">
                <div class="left">0.099 ETH</div>
                <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(2)}  class="col-lg-4">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Jeff Mack</h4>
                  <p class="date">01.08.2019</p>
                </div>
                <div class="right">
                  <p class="id">#5747e75482</p>
                </div>
              </div>
              <div style={{display:`${displayNo==2?'block':'none'}`}} class="bottom-area">
                <div class="left">0.099 ETH</div>
                <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(3)}  class="col-lg-4">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Neal Morris</h4>
                  <p class="date">01.08.2019</p>
                </div>
                <div class="right">
                  <p class="id">#5747e75482</p>
                </div>
              </div>
              <div style={{display:`${displayNo==3?'block':'none'}`}} class="bottom-area">
                <div class="left">0.099 ETH</div>
                <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-xl-center">
            <a class="mybtn2" href="index.html#">View All </a>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default GetStart
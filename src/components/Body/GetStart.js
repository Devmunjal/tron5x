import React,{useState} from 'react'

function GetStart(){
  const [displayNo, setdisplayNo] = useState()
    return(
        <>
        <div id="getStart" style={{paddingTop:"130px",paddingBottom:"250px"}} class="get-start">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex align-self-center">
            <div class="left-area">
              <div class="section-heading">
                <h3 class="subtitle">KEY FEATURES OF TRON5X</h3>
                {/* <h2 class="title">be one of them</h2> */}
               
                  <ul style={{listStyleType:"disc",marginLeft:"10px"}} >
                    <li style={{listStyle:"disc",fontSize:"25px",color:"white"}} >
                    500% Return On Your Investment
                    </li>
                    <li style={{listStyle:"disc",fontSize:"25px",color:"white"}}  >
                    Get 2% ROI daily till you get 500%
                    </li>
                    <li style={{listStyle:"disc",fontSize:"25px",color:"white"}}>
                    No More Ponzi Contracts Completely Secured
                    </li>
                    <li style={{listStyle:"disc",fontSize:"25px",color:"white"}} >
                    100% Transparency
                    </li>
                    <li style={{listStyle:"disc",fontSize:"25px",color:"white"}}>
                    Massive Commission Income on each level
                    </li>
                  </ul>
                {/* <a href="index.html#" class="mybtn1">Play Now!</a> */}
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
    <section class="recent-winners" style={{paddingBottom:"100px"}}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div  class="section-heading">
              <h5 class="subtitle"></h5>
              <h2 class="title">Frequently Asked Question</h2>
              {/* <p class="text" >
                We update our site regularly; more and more winners are added
                every day! To locate the most recent winner's information
              </p> */}
            </div>
          </div>
        </div>
        <div class="row justify-content-center" >
          <div onClick={()=>setdisplayNo(1)} style={{cursor:"pointer"}} class="col-lg-12 ">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Q: What is Tron5X?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==1?'block':'none'}`, textAlign:"left"}}  class="bottom-area">
                <div class="left">Ans: Main purpose of the project is to creating a trusted MLM platform where you can easily
invest and get high returns on your investment</div>
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(2)} style={{cursor:"pointer"}} class="col-lg-12">
            <div class="single-winer">
              <div class="top-area">
                <div class="left" style={{textAlign:"left"}}>
                  <h4 class="name">Q: What is required for investment?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==2?'block':'none'}`, textAlign:"left"}} class="bottom-area">
                <div class="left">Ans: All You Need A TronLink Pro Wallet And A Minimum Of 100 Tron, For Starting
Investments.</div>
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(3)} style={{cursor:"pointer"}} class="col-lg-12">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Q: How much time can I invest?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==3?'block':'none'}`, textAlign:"left"}} class="bottom-area">
                <div class="left">Ans: We Offer 500% total ROI On investment, before completed 500% ROI, your Earning Not
Stopped. after received 500% user Able To Earn By Referral Or Reinvest Again With Us.</div>
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(4)}style={{cursor:"pointer"}}  class="col-lg-12">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Q: How will I get 500% ROI?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==4?'block':'none'}`, textAlign:"left"}} class="bottom-area">
                <div class="left">Ans: First you make it 200%. This ROI will be divided into two parts.
100% will be sent to your withdrawal account.
100% will be stored to make it 500%
You will get 5% from your referrals investment till 15 levels (1 level = 5%, 2 level = 3%, 3
level = 2%, 4 level = 1%, 5 level = 0.5%, 6 level = 0.3%, 7 level = 0.2%, 8 level = 0.1%,
0.01 upto 15th level) </div>
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(5)} style={{cursor:"pointer"}} class="col-lg-12">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Q: How to withdraw?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==5?'block':'none'}`, textAlign:"left"}} class="bottom-area">
                <div class="left">Ans: Just click on the withdraw button and the amount will be credited to your wallet.</div>
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(6)} style={{cursor:"pointer"}} class="col-lg-12">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Q: How can you use the ROI?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==6?'block':'none'}`, textAlign:"left"}} class="bottom-area">
                <div class="left">Ans: 200% you can withdraw that will stored in your withdrawal account
                200% will be sent to the pool on autopool
                The remaining 100% will be re-invested in your account</div>
                <div class="left">
                * THAT 100% RE-INVESTED AMOUNT WILL BE LOCKED TILL YOU INVEST MINIMUM 100
                  TRX MORE IN YOUR WALLET AND WITH THIS DOUBLE INVEST YOU WILL GET 2% ROI
                  DAILY ON TOTAL AMOUNT IN YOUR WALLET
                </div>
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div onClick={()=>setdisplayNo(7)} style={{cursor:"pointer"}} class="col-lg-12">
            <div class="single-winer">
              <div class="top-area">
                <div class="left">
                  <h4 class="name">Q: How will you earn other rewards from referrals?</h4>
                  {/* <p class="date">01.08.2019</p> */}
                </div>
                {/* <div class="right">
                  <p class="id">#5747e75482</p>
                </div> */}
              </div>
              <div style={{display:`${displayNo==7?'block':'none'}`, textAlign:"left"}} class="bottom-area">
                <div class="left">Ans: If your referrals invest 100 TRX then you get the return as the plan said earlier
                  But if your referrals invest 2500 TRX or more than this then you will get 10% of their
                  total investment
                  For getting this return you need at least 10 referrals after reaching this you will get
                  10% of all the 10 referrals total investment</div>
                  <br>
                  </br>
                  <div class="left">
                  MAKE AN INTELLIGENT DECISION AND INVEST IN OUR PLATFORM RETURN WILL
                  BE FOREVER SURE
                  </div>
                  
                {/* <div class="right">
                  <img src="assets/images/icon2.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-lg-12 text-xl-center">
            <a class="mybtn2" href="index.html#">View All </a>
          </div>
        </div> */}
      </div>
    </section>
        </>
    )
}
export default GetStart
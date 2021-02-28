import React from 'react'
import {useState} from 'react'
import { Button } from 'reactstrap';
import './Improvement.css';

function Investment() {
    const [depositAmount, setDepositAmount] = useState()
    const [roi, setroi] = useState(100)
    const [pool, setpool] = useState(234)
    return (
      <div  class="features header-tiles">
        <div class="container">
          <div  class="row">
            <div class="col-lg-12">
              <div class="feature-box">
                <div class="feature-box-inner">
                  <div class="row investment-card-row " >
                    <div class="column col-lg-3 col-md-6 col-sm-12 single-feature tile-box2 card-for-wallet" style={{cursor:"pointer"}}>
                      {/* <div class="icon two">
                            <img src="assets/images/feature/icon2.png" alt="" />
                          </div> */}
                      <div class="content ">
                        <h4 class="title">Locked Wallet</h4>
                        <h5>2324 TRX</h5>
                        {/* <a href="index.html#" class="link">
                          read more <i class="fas fa-arrow-right"></i>
                        </a> */}
                      </div>
                    </div>
                    <div class= "column col-lg-3 col-md-6 col-sm-12 single-feature tile-box3 card-for-wallet" style={{cursor:"pointer"}}>
                      {/* <div class="icon three">
                            <img src="assets/images/feature/icon3.png" alt="" />
                          </div> */}
                      <div class="content ">
                        <h4 class="title">Pool Wallet</h4>
                        <h5>2324 TRX</h5>
                        {/* <a href="index.html#" class="link">
                          read more <i class="fas fa-arrow-right"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row wallet-main">
            <div className="row main-header">
            {/* <div className="col-6 col-lg-4 balance col-sm-6 col-xs-6">
                <h6>Deposit</h6>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div>
              <div className="col-6 col-lg-4 balance col-sm-6 col-xs-6">
                <h6>Withdraw</h6>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div> */}
              {/* <div className="col-6 col-lg-4 balance col-sm-6 col-xs-6">
                <h6>Total Refferal</h6>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div> */}
            </div>
            <div className="row Amount">

              <div className="col col-lg-4 deposit" style={{alignItems:"center",marginTop:"25px"}}>
              <div >
                <h2 className="heading-title">Deposit</h2>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div>
              {/* <div >
                <h6>Deposit</h6>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div> */}
                <p>Enter Amount of TRX</p>
                
                <input
                  placeholder="0 TRX"
                  className="input-trx"
                  // style={{fontFamily:"poppins"}}
                  onChange={(e) => {
                    setDepositAmount(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={depositAmount}
                ></input>
                <div class="badges">
                  <span class="badge badge-success" onClick={()=>{
                    setDepositAmount(100)
                  }}>100 trx</span>
                  <span class="badge badge-primary" onClick={()=>{
                    setDepositAmount(200)
                  }}>200 trx</span>
                  <span class="badge badge-secondary" onClick={()=>{
                    setDepositAmount(500)
                  }} >500 trx</span>
                  <span class="badge badge-success" onClick={()=>{
                    setDepositAmount(1000)
                  }}>1000 trx</span>
                  
                </div>
  
                <p className="input-label">Minimum Depost of 100 TRX</p>
                {depositAmount?<p className="input-label">This 25 trons is Charge </p>:<p></p>}
                <span
                  class="mybtn1"
                  onClick={() => {
                    // props.makeInvestment()
                    // makeInvestment()
                  }}
                  style={{userSelect:"none"}}
                  type="button"
                >
                  {depositAmount?`Invest ${parseInt(depositAmount)+25} TRX`:'Invest'}
                </span>
              </div>
              <div className="col col-lg-4 withdraw" style={{marginTop:"25px", alignItems:"center"}}>
              <div style={{marginBottom:"35px"}}>
                <h2 className="heading-title">Withdraw</h2>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div>
                <div class="row withdraw-row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-feature">
                      {/* <div class="icon one">
                            <img src="assets/images/feature/icon1.png" alt="" />
                          </div> */}
                      <div class="content">
                        <h4 class="title">ROI</h4>
                        <p>{roi}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-feature">
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="content">
                            <h4 class="title">Pool</h4>
                            <p>{pool}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="row withdraw-btn" style={{ marginTop: "12px" , alignItems:"center" }}>
                  <div className="col withdraw-btn-column">
                    {/* <button class="mybtn1" color='danger'>
                      <span className='d-none d-sm-block'> Withdraw ({roi+pool}) Trx</span>
                    </button> */}
                    <span
                      onClick={() => {
                        // onWithdraw()
                      }}

                      style={{userSelect:"none"}}
                      class="mybtn1"
                    >
                      Withdraw ({roi+pool}) Trx
                    </span>
                  </div>
                </div>
              </div>
  
              <div className="col col-lg-4 received" style={{marginTop:"25px",alignItems:"center"}}>
              <div >
                <h2 >Total Refferal</h2>
                <div className="dots">
                  <h5> TRX 1234</h5>
                </div>
              </div>
                <div className="row" style={{ style: "100% !important" }}>
                  <div className="col-6  col-sm-6 withdrawable">
                    <div >
                      <h5 class="box-title">Refferals</h5>
                      <p>TRX</p>
                    </div>
                  </div>
                  {/* <div className="col-6  col-sm-6  refferal">
                    <div class="referral-box">
                      <h5 class="box-title">Earnings</h5>
                      <p>TRX</p>
                    </div>
                  </div> */}
                  <div className="col-6  col-sm-6  withdrawable">
                    <div >
                      <h5 class="box-title">Withdrawable</h5>
                      <p>TRX</p>
                    </div>
                  </div>
                  {/* <div className="col-6  col-sm-6  refferal">
                    <div class="roi-box">
                      <h5 class="box-title">Reward</h5>
  
                      <p> TRX</p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="row withdraw-btn" style={{ marginTop: 18 }}>
                  <div className="col withdraw-btn-column">
                    <button
                      onClick={() => {
                        // onWithdraw()
                      }}
                      class="mybtn1"
                    >
                      Withdraw
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Investment;
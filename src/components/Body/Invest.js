import React,{useState} from 'react'
import { flushSync } from 'react-dom';
import InvestmentTab from './InvestmentTab';
import Pools from './Pools'
import Refferal from './Refferals'

function Invest(){
  const [investmentDetails, setinvestmentDetails] = useState("invest")
    return(
        
         <div id="invest" class="tiles pt-100">
      <div class="container" style={{paddingLeft: "5px",paddingRight: "5px"}}>
        <div class="row">
          <div class="col-md-12 wow fadeInUp">
            <div class="section-heading text-center pb-65">
              {/* <h2 class="heading-title">Your</h2> */}
              <h2 class="heading-title">Statistics</h2>
              <p class="heading-des"></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 wow fadeInUp">
            <ul
              
              style={{
                  border:"0px !important",
                  display:"flex !important",
                  justifyContent:"center "
              }}
              class="nav nav-tabs Frequently-tabs pb-55"
              id="myTab"
              role="tablist"
            >
              <li  class="tabs-list">
                <a class="active link tabs-header" href="#general" data-toggle="tab" style={{cursor:"pointer"}} role="tab">
                  Investment And Details
                </a>
              </li>
              <li class="tabs-list">
                <a data-toggle="tab" href="#ico" style={{cursor:"pointer"}}  role="tab" class="link tabs-header">
                  Pools And Details
                </a>
              </li>
              <li class="tabs-list">
                <a data-toggle="tab" href="#Tokens"style={{cursor:"pointer"}} role="tab" class="link tabs-header">
                  Your Refferals
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 wow fadeInUp">
            <div class="tab-content" id="myTabContent">
              {<div class="tab-pane fade show active" id="general">
                <InvestmentTab></InvestmentTab>
              </div>}
              {<div class="tab-pane fade" id="ico">
                <Pools></Pools>
              </div>}
              {<div class="tab-pane fade" id="Tokens">
                <Refferal></Refferal>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
       
    )
   
}

export default Invest
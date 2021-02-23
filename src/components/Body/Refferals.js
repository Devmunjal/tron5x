import React from 'react'

function Refferal(){
    return(
        <>
        <div class="features refferals">
         <div class="container">
           <div class="row">
             <div class="col-lg-12">
               <div class="feature-box">
                 <div class="feature-box-inner">
                   <div class="row">
                     <div class="col-lg-6 col-md-6">
                       <div class="single-feature">
                         {/* <div class="icon one">
                             <img src="assets/images/feature/icon1.png" alt="" />
                           </div> */}
                         <div class="content">
                           <h4 class="title">Refferal LInk</h4>
                           <input style={{padding:"10px 5px 10px 10px", marginLeft:"-10px" ,marginTop:"10px",marginBottom:"10px"}} class="referral-copy"></input>
                           <button class="mybtn1">Copy</button>
                         </div>
                       </div>
                     </div>
                     <div class="col-lg-6 col-md-6">
                       <div class="single-feature">
                         <div class="row" style={{marginBottom:"20px"}}>
                           <div class="col-lg-6 col-md-6">
                             <div class="content">
                               <h4 class="title">Total Members</h4>
                               <p>234</p>
                             </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                             <div class="content">
                               <h4 class="title">Total Earnings</h4>
                               <p>234</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
        
       </>
   
    )
   

}

export default Refferal;
import React,{useState} from "react";
//import tresure1 from "../../../public/assets/images/treasure1.png"
function Pools() {
  const [lockedwallet, setlockedwallet] = useState(2324);
  const [pool1, setpool1] = useState("100");
  const [pool2, setpool2] = useState("500");
  const [pool3, setpool3] = useState("1500");
  const [pool4, setpool4] = useState("2000");
  const [pool5, setpool5] = useState("2500");
  const [pool6, setpool6] = useState("5000");
  const [pool7, setpool7] = useState("10000");
  const [pool8, setpool8] = useState("20000");
  const [pool9, setpool9] = useState("25000");
  return (
    <div class="features header-tiles">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="feature-box">
              <div class="feature-box-inner">
                <div class="row" style={{justifyContent:"center"}}>
                  <div class="col-lg-6 col-md-6 single-feature tile-box1" style={{cursor:"pointer"}}>
                    {/* <div class="icon one">
                            <img src="assets/images/feature/icon1.png" alt="" />
                          </div> */}
                    <div class="content" >
                      <h4 class="title">Locked Wallet</h4>
                      <h5>{lockedwallet} TRX</h5>
                      {/* <a href="index.html#" class="link">
                          read more <i class="fas fa-arrow-right"></i>
                        </a> */}
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 single-feature tile-box2" style={{cursor:"pointer"}}>
                    {/* <div class="icon two">
                            <img src="assets/images/feature/icon2.png" alt="" />
                          </div> */}
                    <div class="content">
                      <h4 class="title">Reward Earned</h4>
                      <h5>2324 TRX</h5>
                      {/* <a href="index.html#" class="link">
                          read more <i class="fas fa-arrow-right"></i>
                        </a> */}
                    </div>
                  </div>
                  {/* <div class="col-lg-3 col-md-6 single-feature tile-box3"> */}
                    {/* <div class="icon three">
                            <img src="assets/images/feature/icon3.png" alt="" />
                          </div> */}
                    {/* <div class="content">
                      <h4 class="title">Active Pool</h4>
                      <h5>$2324</h5> */}
                      {/* <a href="index.html#" class="link">
                          read more <i class="fas fa-arrow-right"></i>
                        </a> */}
                    {/* </div>
                  </div> */}
                  {/* <div class="col-lg-3 col-md-6 single-feature tile-box4"> */}
                    {/* <div class="icon three">
                            <img src="assets/images/feature/icon3.png" alt="" />
                          </div> */}
                    {/* <div class="content">
                      <h4 class="title">Total Members</h4>
                      <h5>324</h5> */}
                      {/* <a href="index.html#" class="link">
                          read more <i class="fas fa-arrow-right"></i>
                        </a> */}
                    {/* </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 pools-tile">
          <div class={pool1<lockedwallet?"single-game":"single-game-disabled"}>
              <img className={"box-img-InTile"} src="assets/images/treasure1.png" width="200px" alt="" />
              <span onClick={()=>{pool1<lockedwallet?console.log("hii"):console.log("disabled")}}  class="mybtn2">
                 {pool1<lockedwallet?`Buy Now ${pool1}`:`${pool1-lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool2<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure2.png" width="200px" alt="" />
              <span onClick={()=>{pool2<lockedwallet?console.log("hii"):console.log("disabled")}} class="mybtn2">
              {pool2<lockedwallet?`Buy Now ${pool2}`:`${pool2-lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class= {pool3<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure3.png" alt="" />
              <span onClick={()=>{pool3<lockedwallet?console.log("hii"):console.log("disabled")}}  class="mybtn2">
              {pool3<lockedwallet?`Buy Now ${pool3}`:`${pool3-lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool4<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure4.png" width="200px" alt="" />
              <span onClick={()=>{pool4<lockedwallet?console.log("hii"):console.log("disabled")}}  class="mybtn2">
              {pool4<lockedwallet?`Buy Now ${pool4}`:`${pool4-lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool5<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure5.png" width="200px" alt="" />
              <span onClick={()=>{pool5<lockedwallet?console.log("hii"):console.log("disabled")}} class="mybtn2">
              {pool5<lockedwallet?`Buy Now ${pool5}`:`${pool5 - lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool6<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure6.png" width="200px" alt="" />
              <span onClick={()=>{pool6<lockedwallet?console.log("hii"):console.log("disabled")}}  class="mybtn2">
              {pool6<lockedwallet?`Buy Now ${pool6}`:`${pool6 - lockedwallet} left` } Trx
              </span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool7<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure7.png" width="200px" alt="" />
              <span onClick={()=>{pool7<lockedwallet?console.log("hii"):console.log("disabled")}}  class="mybtn2">
              {pool7<lockedwallet?`Buy Now ${pool7}`:`${pool7 - lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool8<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure8.png" alt="" />
              <span onClick={()=>{pool8<lockedwallet?console.log("hii"):console.log("disabled")}}  class="mybtn2">
              {pool8<lockedwallet?`Buy Now ${pool8}`:`${pool8 - lockedwallet} left` } Trx
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pools-tile">
            <div class={pool9<lockedwallet?"single-game":"single-game-disabled"}>
              <img className="box-img-InTile" src="assets/images/treasure9.png" alt="" />
              <span onClick={()=>{pool9<lockedwallet?console.log("hii"):console.log("disabled")}} class="mybtn2">
              {pool9<lockedwallet?`Buy Now ${pool9}`:`${pool9 - lockedwallet} left` } Trx
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pools

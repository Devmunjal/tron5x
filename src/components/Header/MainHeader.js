import React from 'react'

function MainHeader(props) {
    return (
      <header class="header nav-fixed">
        <section class="top-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 column">
                <div class="content">
                  <div class="left-content">
                    <ul class="left-list">
                      <li>
                        <p>
                          Wallet Balance
                        </p>
                      </li>
                      <li>
                        <p>
                           1234 trx
                        </p>
                      </li>
                     
                    </ul>
                  </div>
                  {/* <div class="right-content">
                    <ul class="right-list">
                      <li>
                        <div class="cart-icon tm-dropdown">
                          <i class="fas fa-cart-arrow-down"></i>
                          <span class="cart-count">10</span>
                          <div class="tm-dropdown-menu">
                            <ul class="list">
                              <li class="list-item">
                                <div class="close">
                                  <i class="fas fa-times"></i>
                                </div>
                                <ul class="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                              <li class="list-item">
                                <div class="close">
                                  <i class="fas fa-times"></i>
                                </div>
                                <ul class="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                              <li class="list-item">
                                <div class="close">
                                  <i class="fas fa-times"></i>
                                </div>
                                <ul class="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                              <li class="list-item">
                                <div class="close">
                                  <i class="fas fa-times"></i>
                                </div>
                                <ul class="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                            </ul>
                            <a href="cart.html" class="link-btn">
                              Cart Page
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="notofication tm-dropdown">
                          <i class="fas fa-bell"></i>
                          <span class="count">11</span>
                          <div class="tm-dropdown-menu">
                            <ul class="list">
                              <li>
                                <a href="index.html#">
                                  <i class="fas fa-bell"></i>
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="index.html#">
                                  <i class="fas fa-bell"></i>
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="index.html#">
                                  <i class="fas fa-bell"></i>
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="index.html#">
                                  <i class="fas fa-bell"></i>
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="index.html#">
                                  <i class="fas fa-bell"></i>
                                  Invest Exchange
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href="index.html#"
                          class="sign-in"
                          data-toggle="modal"
                          data-target="#login"
                        >
                          <i class="fas fa-user"></i> Sign In
                        </a>
                      </li>
                    </ul>
                  </div>
                 */}
                </div>
              </div>
              <div class="col-lg-6 column ">
                <div class="content headerContent">
                  <div class="left-content">
                    <ul class="left-list">
                      <li>
                        <p>
                          Contract Address
                        </p>
                      </li>
                      <li>
                        <p>
                           123456789
                        </p>
                      </li>
                     
                    </ul>
                  </div>
                  </div>
                  </div>
            </div>
          </div>
        </section>
  
        <div class="mainmenu-area" style={{backgroundImage:"linear-gradient( 262deg, rgb(121, 219, 251) 8%, rgb(39, 148, 229) 20%)"}}>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo.png" className="logo-width" alt="company logo" />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#main_menu"
                    aria-controls="main_menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse fixed-height"
                    id="main_menu"
                  >
                    <ul class="navbar-nav ml-auto">
                      {/* <li class="nav-item dropdown">
                        <a
                          class="nav-link  "
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={()=>props.scroll("headerImage")}
                        >
                          Home
                          <div class="mr-hover-effect"></div>
                        </a> */}
                        {/* <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="index.html">
                              {" "}
                              <i class="fa fa-angle-double-right"></i>Home 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index2.html">
                              {" "}
                              <i class="fa fa-angle-double-right"></i> Home 2
                            </a>
                          </li>
                        </ul> */}
                      {/* </li> */}
                      <li class="nav-item">
                        <a class="nav-link" style={{color:"white"}}  onClick={()=>props.scroll("headerImage")}>
                          Home
                          <div class="mr-hover-effect"></div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"  style={{color:"white"}} onClick={()=>props.scroll("getStart")}>
                          How To Invest
                          <div class="mr-hover-effect"></div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" style={{color:"white"}} onClick={()=>props.scroll("invest")}>
                          Make Investment
                          <div class="mr-hover-effect"></div>
                        </a>
                      </li>
                    
                      <li class="nav-item">
                        <a class="nav-link" style={{color:"white"}} onClick={()=>props.scroll("invest")}>
                        Pool Investment
                          <div class="mr-hover-effect"></div>
                        </a>
                      </li>
                    
                      {/* <li class="nav-item">
                        <a class="nav-link" href="tournaments.html">
                          tournaments
                          <div class="mr-hover-effect"></div>
                        </a>
                      </li> */}
                      {/* <li class="nav-item dropdown">
                                          <a class="nav-link dropdown-toggle" href="index.html#"  role="button" data-toggle="dropdown" aria-haspopup="true"
                                              aria-expanded="false">
                                              Pages
                                              <div class="mr-hover-effect"></div>
                                          </a>
                                          <ul class="dropdown-menu" >
                                              <li><a class="dropdown-item" href="about.html"> <i class="fa fa-angle-double-right"></i>About</a></li>
                                              <li><a class="dropdown-item" href="affiliate.html"> <i class="fa fa-angle-double-right"></i>Affiliate</a></li>
                                              <li><a class="dropdown-item" href="awards.html"> <i class="fa fa-angle-double-right"></i>Awards</a></li>
                                              <li><a class="dropdown-item" href="bonus.html"> <i class="fa fa-angle-double-right"></i>Bonus</a></li>
                                              <li><a class="dropdown-item" href="cart.html"> <i class="fa fa-angle-double-right"></i>Cart</a></li>
                                              <li><a class="dropdown-item" href="faq.html"> <i class="fa fa-angle-double-right"></i>Faq</a></li>
                                              <li><a class="dropdown-item" href="how-it-work.html"> <i class="fa fa-angle-double-right"></i>How It Work</a></li>
                                              <li><a class="dropdown-item" href="terms-conditions.html"> <i class="fa fa-angle-double-right"></i>Terms & Condition</a></li>
                                              <li><a class="dropdown-item" href="terms-conditions-details.html"> <i class="fa fa-angle-double-right"></i>Condition Details</a></li>
                                              <li><a class="dropdown-item" href="404.html"> <i class="fa fa-angle-double-right"></i>404</a></li>
                                          </ul>
                                      </li>
                                       */}
                      {/* <li class="nav-item">
                                              <a class="nav-link" href="contact.html">Contact
                                                      <div class="mr-hover-effect"></div></a>
                                          </li>
                                   */}
                    </ul>
                    <a
                      href="index.html#"
                      class="mybtn1"
                      data-toggle="modal"
                      data-target="#signin"
                    >
                      Connect Wallet
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  export default MainHeader;
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/fontawesome/css/all.css';
import './assets/css/normalize.css';
import './assets/css/style.css';


import Eliquids from './Eliquids';
import Menu from './Menu';
import Footer from './Footer';
import Saltnic from './Saltnic';
import Devices from './Devices';
import Juul from './Juul';
import Sale from './Sale';
import Stlth from './Stlth';
import Newarrivals from './Newarrivals';
import Contactus from './Contactus';
import Policies from './Policies';
import Login from './Login';
import Signup from './Signup';
import Addcart from './Addcart';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Menu />  
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/eliquids" component={Eliquids} />
       <Route path="/saltnic" component={Saltnic} />
       <Route path="/devices" component={Devices} />
       <Route path="/juul" component={Juul} />
       <Route path="/sale" component={Sale} />
       <Route path="/stlth" component={Stlth} />
       <Route path="/newarrivals" component={Newarrivals} />
       <Route path="/contactus" component={Contactus} />
       <Route path="/policies" component={Policies} />
       <Route path="/login" component={Login} />
       <Route path="/signup" component={Signup} />
       <Route path="/addcart" component={Addcart} />
      </Switch>
      <Footer /> 
    
    </BrowserRouter>
  );
}

const Home = () => {

  return (
     <div> 
      <section>
        <div className="section1">
        <div id="carousel-example3" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src="assets/images/section1-bg.png" className="my-image" />
            </div>
            <div className="item">
              <img src="assets/images/section1-bg-2.jpg" className="my-image" />
            </div>
          </div>
        </div>
        <div className="sec1-text">
          <h1>canadian eliquid distributors</h1>
          <h4>Wholesale E-Liquid in Canada</h4>
          <div className="sec1-btn">
            <Link to="Sale" className="btn btn-brograd3">Shop</Link>&emsp;&emsp;
            <Link to="Signup" className="btn btn-brograd3">Sign Up</Link>
          </div>
        </div>
          </div>
      </section>

      <section>
        <div className="section2">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="section2-heading">
                    <h1>It Starts with the 
                      <span>Perfect</span>
                      <span className="span2">Product</span>
                    </h1>
                    <p>Duis sit amet risus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis justo nec nisi placerat interdum</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="products">

                <div className="tab-content">
                <div id="menu" className="tab-pane fade active in">
                  <div className="container-fluid">
                      <div className="row">
                      <div className="col-lg-12 sec2-line"></div>
                  </div> 
                  <div className="row mt-30">
                      <div className="col-lg-1">
                        <div className="controls pull-left hidden-xs">
                        <Link to=">#carousel-example" className="left fa fa-chevron-left btn btn-default" data-slide="prev"></Link>
                      </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="fc-heading">
                          <h1>FEATURED COLLECTION</h1>
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <div className="controls pull-right hidden-xs">
                        <Link to=">#carousel-example" className="right fa fa-chevron-right btn btn-default" data-slide="next"></Link>
                      </div>
                      </div>
                    </div>
                  </div>
                <br />
                <div id="carousel-example" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item active">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
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
            </div>
          </div>
      </section>

      <section>
        <div className="section3">
            <div className="container">
              <div className="row">
                <div className="products">
                <div className="tab-content">
                <div id="menu1" className="tab-pane fade active in">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12 sec2-line"></div>
                    </div>
                    <div className="row mt-30">
                      <div className="col-sm-1 col-lg-1 col-xs-12">
                        <div className="controls pull-left hidden-xs">
                        <Link to=">#carousel-example1" className="left fa fa-chevron-left btn btn-default" data-slide="prev"></Link>
                      </div>
                      </div>
                      <div className="col-sm-10 col-lg-10 col-xs-12">
                        <div className="fc-heading1">
                          <h1>BEST SELLER</h1>
                        </div>
                      </div>
                      <div className="col-sm-1 col-lg-1 col-xs-12">
                        <div className="controls pull-right hidden-xs">
                        <Link to=">#carousel-example1" className="right fa fa-chevron-right btn btn-default" data-slide="next"></Link>
                      </div>
                      </div>
                    </div>
                  </div>
                <br />
                <div id="carousel-example1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item active">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach Ice By <br />Cirque du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Blue raspberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Mango Peach By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                          <div className="col-item">
                            <div className="photo">
                              <img src="assets/images/section2-bottle.png" className="img-responsive" alt="" />
                            </div>
                            <div className="info">
                              <div className="row">
                                <div className="price text-center">
                                  <p className="price-text-color">Strawberry By Cirque <br />du Salt</p>
                                </div>
                              </div>
                              <div className="al-btn text-center">
                                <Link to="product-details.html">LOG IN TO VIEW PRICE</Link>
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
            </div>
          </div>
      </section>

      <section>
        <div className="section4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="section4-heading">
                    <h1>SHOP BY BRAND</h1>
                  </div>
                </div>
              </div>
                <div className="row">
                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/1.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/2.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/3.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/1.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/2.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/3.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/1.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/2.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="img-box">
                          <img src="assets/images/brands/3.png" alt="" className="img-responsive" />
                          <div className="overlay">
                            <div className="overlay-content">
                              <h4 className="text">Lorem Ipsum</h4>
                              <p className="sub-text">Maecenas consequat rutrum diam, ac congue ex ultricies a. Donec et erat in quam efficitur tempor nec nec mauris.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="text-center mt-20">
                    <Link to="#" className="btn btn-brograd">VIEW ALL BRANDS</Link>
                  </div>
            </div>
          </div>
      </section>

      <section>
        <div className="section5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="section5-heading">
                    <h1>Some Of Our <span>Happy Clients</span></h1>
                  </div>
                </div>
              </div>
          <div className='row'>
            <div className='col-sm-12 col-xs-12'>
              <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                
                <div className="carousel-inner">
                
                  <div className="item active">
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                          <div className="client-msg">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et<br /> dolore magna aliqua.</p>
                          </div>
                        </div>
                        <div className="row mt-150">
                          <div className="col-sm-6 col-xs-12">
                            <img className="img-circle img-responsive pull-right" src="assets/images/client1.png" />
                          </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="client-info">
                              <p>My Name</p>
                              <p className="p2">CEO, AmberCreative</p>
                            </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="item">
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                          <div className="client-msg">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et<br /> dolore magna aliqua.</p>
                          </div>
                        </div>
                        <div className="row mt-150">
                          <div className="col-sm-6 col-xs-12">
                            <img className="img-circle img-responsive pull-right" src="assets/images/client1.png" />
                          </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="client-info">
                              <p>My Name</p>
                              <p className="p2">CEO, AmberCreative</p>
                            </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                
                <Link to=">#quote-carousel" data-slide="prev" className="left carousel-control">
                  <img src="assets/images/arrow-left.png" className="" alt="" />
                </Link>
                <Link to=">#quote-carousel" data-slide="next" className="right carousel-control">
                  <img src="assets/images/arrow-right.png" className="" alt="" />
                </Link>
              </div>  
              <div className="sec5-bottom-text">
                <p><Link to="#">See All To Click Here</Link></p>
              </div>                        
            </div>
          </div>
            </div>
          </div>
      </section>

      <section>
        <div className="section6">
            <div className="container-fluid">
              <div className="row">
              <div className="col-lg-12 sec3-line">
              </div>
            </div>
            <div className="row pb-50">
              <div className="col-sm-12 col-xs-12">
                <div className="fc-heading1">
                  <h1>New Arrivals</h1>
                </div>
              </div>
            </div>
              <div className="row">
                <div className="products">
                <div className="tab-content">
                <div id="menu1" className="tab-pane fade active in">
                  <div className="col-sm-1 col-xs-1">
                    <div className="controls pull-left hidden-xs">
                    <Link to=">#carousel-example2" className="left fa fa-chevron-left btn btn-default" data-slide="prev"></Link>
                  </div>
                </div>
                <div className="col-sm-10 col-xs-10">
                  <div id="carousel-example2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="flex-container">
                          <div className="flex-img">
                            <img src="assets/images/arrivals/1.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/2.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/3.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/4.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/5.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/6.png" className="img-responsive" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="flex-container">
                          <div className="flex-img">
                            <img src="assets/images/arrivals/1.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/2.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/3.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/4.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/5.png" className="img-responsive" alt="" />
                          </div>
                          <div className="flex-img">
                            <img src="assets/images/arrivals/6.png" className="img-responsive" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1 col-xs-1">
                    <div className="controls pull-right hidden-xs">
                    <Link to=">#carousel-example2" className="right fa fa-chevron-right btn btn-default" data-slide="next"></Link>
                  </div>
                </div>
                </div>  
                </div>    
            </div>
              </div>
            </div>
          </div>
      </section>
      </div>
    )

}

export default App;
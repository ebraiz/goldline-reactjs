import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () =>{
  if (window.location.pathname === '/Login' || window.location.pathname === '/Signup') return null;
  else{
  return(
  <div>
      <nav className="navbar navbar-lorem">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                     
          </button>
        <Link to="/" className="navbar-brand">
          <img src="../assets/images/logo.png" className="img-responsive" alt="logo" />
        </Link>
        <ul className="mobile-icon">
          <li>
            <Link to="/" className="search-open1">
              <img src="assets/images/search-icon.png" className="img-responsive hidden-sm hidden-md hidden-lg" alt="" />
            </Link>
          </li>
          <li>
              <Link to="Login">
                <img src="assets/images/profile-icon.png" className="img-responsive hidden-sm hidden-md hidden-lg" alt="" />
              </Link>
          </li>
          <li>
              <Link to="Addcart">
                <img src="assets/images/cart-icon.png" className="img-responsive hidden-sm hidden-md hidden-lg" alt="" />
              </Link>
          </li>
        </ul>
        </div>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right-lorem">
            <li><Link to="/" exact className="active">HOME</Link></li>
            <li><Link to="Eliquids">E-LIQUIDS</Link></li>
            <li><Link to="Saltnic">SALT NIC</Link></li>
            <li><Link to="Devices">DEVICES</Link></li>
            <li><Link to="Juul">JUUL COMPATIBLE PODS</Link></li>
            <li><Link to="Sale">SALE</Link></li>
            <li><Link to="Stlth">STLTH VAPE</Link></li>
            <li><Link to="Newarrivals">NEWEST ARRIVALS</Link></li>
            <li><Link to="Contactus">CONTACT US</Link></li>
            <li>
              <Link to="/" className="search-open">
                <img src="assets/images/search-icon.png" className="hidden-xs img-responsive" alt="" />
              </Link>
            </li>
            <li>
              <Link to="Login">
                <img src="assets/images/profile-icon.png" className="hidden-xs img-responsive" alt="" />
              </Link>
            </li>
            <li>
              <Link to="Addcart">
                <img src="assets/images/cart-icon.png" className="hidden-xs img-responsive" alt="" />
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
 )
}
} 

export default Menu;
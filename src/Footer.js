import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
	if (window.location.pathname === '/Login' || window.location.pathname === '/Signup') return null;
  return(
  <div>
      	<footer>
	    	<div className="footer-section">
	    		<div className="container-fluid">
	    			<div className="logo-footer">
		    			<img src="assets/images/footer-logo.png" className="img-responsive" alt="" />
		    		</div>
		    		<div className="row">
		    			<div className="col-sm-2 col-xs-6">
		    				<div className="foot-sec-col1">
			    				<h3>QUICK LINKS</h3>
			    				<ul>
				    				<li><Link to="/">HOME</Link></li>
			    					<li><Link to="Eliquids">E-LIQUIDS</Link></li>
			    					<li><Link to="Saltnic">SALT NIC</Link></li>
			    					<li><Link to="Devices">DEVICES</Link></li>
			    					<li><Link to="Juul">JUUL COMPATIBLE PODS</Link></li>
		    					</ul>
	    					</div>
		    			</div>
		    			<div className="col-sm-2 col-xs-6">
		    				<div className="foot-sec-col1">
		    					<h3 className="v-hidden">Q</h3>
		    					<ul>
									<li><Link to="Sale">SALE</Link></li>
			    					<li><Link to="Stlth">STLTH VAPE</Link></li>
			    					<li><Link to="Newarrivals">NEWEST ARRIVALS</Link></li>
			    					<li><Link to="Policies">POLICIES</Link></li>
			    					<li><Link to="Contactus">Contact Us</Link></li>
		    					</ul>
	    					</div>
		    			</div>
		    			<div className="col-sm-4 col-xs-12">
		    				<div className="foot-sec-col3">
		    					<h3>CONTACT US</h3>
		    					<ul>
			    					<li>
			    						<span><img src="assets/images/footer-call.png" alt="" /></span>
			    						<span>&emsp;780-306-5650</span>
			    					</li>
									<li>
										<span><img src="assets/images/footer-email.png" alt="" /></span>
										<span>&emsp;<Link to="mailto:someone@example.com?Subject=Hello%20again" target="_top">info@loremipsum.com</Link></span>
									</li>
									<li>
										<span><img src="assets/images/footer-location.png" alt="" /></span>
										<span>&emsp;&nbsp;&nbsp;Lorem ipsum dollar dummy text</span> 
									</li>
								</ul>
		    				</div>
		    			</div>
		    			<div className="col-sm-4 col-xs-12">
			    			<div className="foot-sec-col4">
			    				<h3>NEWSLETTER</h3>
			    				<ul>
			    					<li>Subscribe us for products news and updates</li>
			    					<li>
			    						<form className="form-inline">
										    <div className="form-group">
										      <input type="text" className="footer-input" placeholder="Email" />
										    </div>
										    
										    <button type="submit" className="input-btn">
										    	<img src="assets/images/btn-icon.png" alt="" />
										    </button>
										</form>
			    					</li>
			    					<li>&copy; 2019 <span className="yellow">Lorem Ipsum</span> | All Rights Reserved</li>
			    				</ul>
		    				</div>
		    			</div>
		    		</div>
	    		</div>
	    	</div>
	    </footer>
  </div>
 )

} 

export default Footer;
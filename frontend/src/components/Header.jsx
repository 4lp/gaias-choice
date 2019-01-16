import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';


export default class Header extends Component {
	render(){
		return(
			<div>
				<nav id="header" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<div className="row">
							<div className="socials col-12">
								<a target="_blank" href="https://twitter.com/ChooseGaias"><i className="fab fa-twitter-square"></i></a>
								<a target="_blank" href="https://www.instagram.com/choosegaias/"><i className="fab fa-instagram"></i></a>
								<a target="_blank" href="https://www.facebook.com/choosegaias/"><i className="fab fa-facebook-square"></i></a>
								<a target="_blank" href="https://www.pinterest.com/gaiaschoice/"><i className="fab fa-pinterest-square"></i></a>
								<a target="_blank" href="https://linkedin.com/company/gaiaschoice"><i className="fab fa-linkedin"></i></a>
								<a target="_blank" href="https://www.youtube.com/channel/UCIA6YCQOD6aVraoRITio54A?view_as=subscriber"><i className="fab fa-youtube-square"></i></a>
							</div>
							<div className="clearfix"></div>
							<Link to="/" className="nav-brand col-3" style={{color: "black"}}><h4>Gaia&apos;s Choice</h4></Link>
					{/*<Collapsible trigger="Menu"> 
									<ul>
										<li><Link to="/">Home</Link></li>
										<li><Link to="/blog">Blog</Link></li>
										<li><Link to="/products">Products</Link></li>
										<li><Link to="https://shop.medicalmarijuanainc.com/">Shop</Link></li>
										<li><Link to="/contact">Contact Us</Link></li>
									</ul>
								</Collapsible>*/}
							<div className="collapse navbar-collapse col-9">
								<ul className="navbar-nav mr-auto mt-2 mt-lg-0 flex-row">
									<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Products
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										  <a className="dropdown-item" href="#">Butter</a>
										  <a className="dropdown-item" href="#">Gummies</a>
										  <a className="dropdown-item" href="#">Honey</a>
										  <a className="dropdown-item" href="#">Love Butter</a>
										  <a className="dropdown-item" href="#">Tincture</a>
										  <a className="dropdown-item" href="#">Vape Juice</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											About Us	
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										  <a className="dropdown-item" href="#">Mission Statement</a>
										  <a className="dropdown-item" href="#">Experience</a>
										  <a className="dropdown-item" href="#">Why we&apos;re doing this</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Learn More	
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										  <a className="dropdown-item" href="#">What is CBD?</a>
										  <a className="dropdown-item" href="#">Benefits of CBD</a>
										  <a className="dropdown-item" href="#">Who Can Use CBD?</a>
										  <a className="dropdown-item" href="#">FAQ</a>
										</div>
									</li>
									<li className="nav-item active"><Link to="/blog" className="nav-link">Blog</Link></li>
									<li className="nav-item active"><Link to="https://shop.medicalmarijuanainc.com/" className="nav-link">Shop</Link></li>
									<li className="nav-item active"><Link to="/contact" className="nav-link">Contact Us</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				<div id="header-spacer"></div>
			</div>
		)
	}
}

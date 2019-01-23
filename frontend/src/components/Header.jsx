import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import {connect} from 'react-redux';
import {products} from "../actions";


class Header extends Component {
	componentDidMount() {
		if (!this.props.products.length){
	    	this.props.fetchProducts();
		}
	}	

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
							<div className="collapse navbar-collapse col-9">
								<ul className="navbar-nav mr-auto mt-2 mt-lg-0 flex-row">
									<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Products
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											{this.props.products.map((product) => (
												<div>
													<a className="dropdown-item" href={"/products/"+product.path}>{product.name}</a>
												</div>
											))}
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

const mapStateToProps = state => {
	let errors = [];
	if (state.products.errors) {
		errors = Object.keys(state.products.errors).map(field => {
			return {field, message: state.products.errors[field]};
		});
	}
	return {
		products: state.products,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchProducts: () => {
			dispatch(products.fetchProducts());
	    },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import {connect} from 'react-redux';
import {products} from "../actions";


class Header extends Component {
	state = {
		headerHeight: 0 
	}
	componentDidMount() {
		if (!this.props.products.length){
	    	this.props.fetchProducts();
		}
		const height = this.divElement.clientHeight;
		this.setState({ headerHeight: height });
	}	

	render(){
		let discount_mode = false;
		let discounts = {};
		if (!this.props.products.isLoading){
			if (this.props.products.products.find((product)=>product.is_discounted)){
				discount_mode = true;
				this.props.products.products.map((product)=>{
					if (product.is_discounted){
						discounts[product.name] = product.discount_amount;
					}
				});
			}
			return(
				<div>
					<nav id="header" className="navbar fixed-top navbar-expand-lg" ref={ (divElement) => this.divElement = divElement}>
						<div className="container-fluid">
							<div className="row" style={{width:'100%'}}>
								{discount_mode &&
									<div className="promo col-12 text-center">
										<div className="alert alert-success">
											{Object.keys(discounts).map((key, index) => (
												<span key={key}>{key} is discounted by {discounts[key]}!<br/></span>
											))}
										</div>
									</div>
								}
								<div className="container">
									<div className="row">
										<div className="socials col-12">
											<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ChooseGaias"><i className="fab fa-twitter-square"></i></a>
											<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/choosegaias/"><i className="fab fa-instagram"></i></a>
											<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/choosegaias/"><i className="fab fa-facebook-square"></i></a>
											<a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/gaiaschoice/"><i className="fab fa-pinterest-square"></i></a>
											<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/gaiaschoice"><i className="fab fa-linkedin"></i></a>
											<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCIA6YCQOD6aVraoRITio54A?view_as=subscriber"><i className="fab fa-youtube-square"></i></a>
										</div>
										<Link to="/" className="nav-brand col-3" style={{color: "black"}}><h4>Gaia&apos;s Choice</h4></Link>
										<div className="collapse navbar-collapse col-9">
											<ul className="navbar-nav mr-auto mt-2 mt-lg-0 flex-row">
												<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
												<li className="nav-item dropdown">
													<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/products">
														Products
													</a>
													<div className="dropdown-menu" aria-labelledby="navbarDropdown">
														{this.props.products.products.map((product) => (
															<div key={product.id}>
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
												<li className="nav-item active"><a href="https://shop.medicalmarijuanainc.com/" className="nav-link" target="_blank">Shop</a></li>
												<li className="nav-item active"><Link to="/contact" className="nav-link">Contact Us</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
					<div id="header-spacer" style={{marginBottom: this.state.headerHeight + 50 + 'px'}}></div>
				</div>
			)
		} else {
			return (<div>Loading...</div>)
		}
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

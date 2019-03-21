import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import {connect} from 'react-redux';
import {products} from "../actions";
import {settings} from "../actions";

class Header extends Component {
	state = {
		headerHeight: 0,
		discountDismissed: false,
	}
	componentDidMount() {
		if (!this.props.settings.length){
	    	this.props.fetchSettings();
		}
		let height = this.divElement.clientHeight;
		this.setState({ headerHeight: height });
		window.addEventListener("resize", this.setState({ headerHeight: height }));
	}	

	componentWillUnmount(){
		let height = this.divElement.clientHeight;
		window.removeEventListener("resize", this.setState({ headerHeight: height }));
	}

	dismissAlert() {
		this.setState({discountDismissed: true},()=>{
			const height = this.divElement.clientHeight;
			this.setState({ headerHeight: height });
		})
		
	}



	render(){
		let is_prelaunch;
		if(!this.props.settings.isLoading){
			let prelaunch_setting = this.props.settings.settings.find(setting => setting.name === 'prelaunch_mode')
			is_prelaunch = prelaunch_setting.value
		}
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
					<nav id="header" className="navbar fixed-top navbar-expand-lg m0 p0" ref={ (divElement) => this.divElement = divElement}>
						<div className="container-fluid m0 p0">
							<div className="row m0 p0" style={{width:'100%'}}>
								{is_prelaunch &&
									<div class="corner-ribbon top-left sticky red shadow"><span class="ribbon-text">Shop Coming Soon!</span></div>
								}
								{discount_mode && !this.state.discountDismissed &&
									<div className="promo col-12 text-center m0 p0">
										<div className="alert alert-success alert-dismissable" role="alert">
											<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.dismissAlert()}><span aria-hidden="true">&times;</span></button>
											<h4>DISCOUNTS</h4>
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
													<Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/products">
														Products
													</Link>
													<div className="dropdown-menu" aria-labelledby="navbarDropdown">
														{this.props.products.products.map((product) => (
															<div key={product.id}>
																<Link className="dropdown-item" to={"/products/"+product.path}>{product.name}</Link>
															</div>
														))}
													</div>
												</li>
												<li className="nav-item dropdown">
													<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														About Us	
													</a>
													<div className="dropdown-menu" aria-labelledby="navbarDropdown">
													  <Link className="dropdown-item" to="/mission-statement">Mission Statement</Link>
													  <Link className="dropdown-item" to="/experience">Experience</Link>
													  <Link className="dropdown-item" to="/why-were-doing-this">Why we&apos;re doing this</Link>
													</div>
												</li>
												<li className="nav-item dropdown">
													<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Learn More	
													</a>
													<div className="dropdown-menu" aria-labelledby="navbarDropdown">
													  <Link className="dropdown-item" to="what-is-cbd">What is CBD?</Link>
													  <Link className="dropdown-item" to="benefits">Benefits of CBD</Link>
													  <Link className="dropdown-item" to="who-can-use">Who Can Use CBD?</Link>
													  <Link className="dropdown-item" to="faq">FAQ</Link>
													</div>
												</li>
												<li className="nav-item active"><Link to="/blog" className="nav-link">Blog</Link></li>
												{ is_prelaunch ?
													<li className="nav-item active"><Link to="/products" className="nav-link">Shop</Link></li> : 
													<li className="nav-item active"><a href="https://shop.medicalmarijuanainc.com/" className="nav-link" target="_blank">Shop</a></li>
												}
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
	if (state.settings.errors) {
		errors = [...errors, Object.keys(state.settings.errors).map(field => {
			return {field, message: state.settings.errors[field]};
		})];
	}
	return {
		products: state.products,
		settings: state.settings,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchProducts: () => {
			dispatch(products.fetchProducts());
	    },
			fetchSettings: () => {
			dispatch(settings.fetchSettings());
	    },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

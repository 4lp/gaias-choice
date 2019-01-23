import Header from "./Header";
import ProductDetail from "./ProductDetail";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class Products extends Component {

	render(){
		return(
			<div>
				<Header />
					{this.props.products.map((product) => (
						<div>
							<Link to={"/products/"+product.path}>{product.name}</Link>
						</div>
					))}
			</div>
		)
	}

}


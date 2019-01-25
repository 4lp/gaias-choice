import Header from "./Header";
import ProductDetail from "./ProductDetail";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class Products extends Component {

	render(){
		if (!this.props.products.isLoading){
			return(
				<div>
					<Header />
						{this.props.products.products.map((product) => (
							<div key={product.id}>
								<Link to={"/products/"+product.path}>{product.name}</Link>
							</div>
						))}
				</div>
			)
		} else {
			return(<div>loading...</div>)
		}
	}

}


import Header from "./Header";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class ProductDetail extends Component {

	render(){
		const products = this.props.products.products;
        const path = this.props.match.params.productname;
        const product = products.filter(product => {
            if(product.path == path) {
                return product;
            }
        });
		if (!this.props.products.isLoading) {
			return(
				<div>
					<Header />
					<h1>{product[0].name}</h1>
					<p>{product[0].description}</p>
				</div>
			)
		} else {
			return(<div>Loading...</div>)
		}
	}

}

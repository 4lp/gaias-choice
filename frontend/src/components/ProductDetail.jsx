import Header from "./Header";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class ProductDetail extends Component {

	render(){
		const products = this.props.products;
        const path = this.props.match.params.productname;
        const product = products.filter(product => {
			console.log(product)
			console.log(path)
            if(product.path == path) {
				console.log(product)
                return product;
            }
        });
		console.log(product[0])
		if (product) {
			return(
				<div>
					<Header />
					Test
					{product.name}
					{product.description}
				</div>
			)
		} else {
			return(<div>Loading...</div>)
		}
	}

}

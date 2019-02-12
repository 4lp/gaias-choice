import Header from "./Header";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class ProductDetail extends Component {

	render(){
		const products = this.props.products.products;
        const path = this.props.match.params.productname;
		let images;
		let reviews;
        const product = products.filter(product => {
            if(product.path == path) {
				images = product.images.split(',');
				reviews = product.reviews.split(',');
                return product;
            }
        });
		if (!this.props.products.isLoading) {
			return(
				<div>
					<Header />
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1>{product[0].name}</h1>
							</div>
							<div className="col-6">
								<p>{product[0].description}</p>
								<h3 className="text-center">Reviews</h3>
								<p>
								{reviews.map((review) => (
									<div>
										{review}
									<hr/>
									</div>
								))}
								</p>
							</div>
							<div className="col-6">
								{images.map((image, index) => (
									<div className="product-image" key={index}>
										<img src={image}/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return(<div>Loading...</div>)
		}
	}

}

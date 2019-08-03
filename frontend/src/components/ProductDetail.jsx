import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class ProductDetail extends Component {

	render(){
		const products = this.props.products.products;
		const path = this.props.props.match.params.productname;
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
				{/*<div className="container-fluid product-details-container" style={{backgroundImage: 'url('+images[0]+')'}}>*/}
					<div className="container-fluid product-details-container">
						<div className="row">
							<div className="col-12 text-center product-name">
								<h1 className="text-center">{product[0].name}</h1>
							</div>
							<div className="col-12 col-md-6">
								<p className="product-info" dangerouslySetInnerHTML={{ __html: product[0].description}}></p>
								<div className="text-center">
								</div>
								<br/>
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
							<div className="col-12 col-md-6">
								{images.map((image, index) => (
									<div className="product-image" key={index}>
										<img src={image}/>
									</div>
								))}
								<div className="text-center">
									<button type="button" className="btn btn-primary btn-lg"><strong>Buy now!</strong></button>
								</div>
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

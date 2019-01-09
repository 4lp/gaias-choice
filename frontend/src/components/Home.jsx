import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from "./Header";
import {connect} from 'react-redux';
{/*import Register from "./Register";
import Footer from "./Footer";
import {auth} from "../actions";
import ReactInterval from 'react-interval';*/}

class Home extends Component {
	state = {
	}

	render(){
		return(
			<div>
				<Header />
				<div className="main-photo">
					<div className="main-photo-text">
						<h1>Gaia&apos;s Choice</h1>
						<hr />
						<h4>To provide wholesome, trustworthy products that will promote the well being of our community.</h4>
					</div>
				</div>
				<div className="narrow-section">
					<p>
					About Us: With a combined 17 years in product manufacturing, a former research and develop chemist at a top medical cannabis company, and the drive and passion to provide natural and safe products, Gaia's Choice founders aim to better the community.
					</p>
					<hr />
				</div>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

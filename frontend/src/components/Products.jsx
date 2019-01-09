import Header from "./Header";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
	state = {
	}

	render(){
		return(
			<div>
				<Header />
				Various product categories
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

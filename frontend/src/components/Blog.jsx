import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./Header";
import {blogposts} from "../actions";

class Blog extends Component {
	state = {
	}

	componentDidMount() {
		if (!this.props.blogposts.length){
	    	this.props.fetchBlogposts();
		}
	}	
	
	render(){
		return(
			<div>
				<Header />
				{this.props.blogposts.map((blogpost) => (
					<div>
						<h4>{blogpost.title}</h4>
						<p>{blogpost.text}</p>
						<p>{blogpost.owner}</p>
						<p>{blogpost.created_at}</p>
					</div>
				))}
			</div>
		)
	}
}

const mapStateToProps = state => {
	let errors = [];
	if (state.blogposts.errors) {
		errors = Object.keys(state.blogposts.errors).map(field => {
			return {field, message: state.blogposts.errors[field]};
		});
	}
	return {
		blogposts: state.blogposts,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchBlogposts: () => {
			dispatch(blogposts.fetchBlogposts());
	    },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

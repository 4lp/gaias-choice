import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./Header";
import {blogposts} from "../actions";
import {blogcategories} from "../actions";

class Blog extends Component {
	state = {
	}

	componentDidMount() {
		if (!this.props.blogposts.length){
	    	this.props.fetchBlogposts();
	    	this.props.fetchBlogCategories();
		}
	}	
	
	render(){
		return(
			<div>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-9">
							{this.props.blogposts.map((blogpost) => (
								<div>
									<h4>{blogpost.title}</h4>
									<p>{blogpost.text}</p>
									<p>{blogpost.owner}</p>
									<p>{blogpost.created_at}</p>
								</div>
							))}
						</div>
						<div className="col-3">
							{this.props.blogcategories.map((category) => (
								<div>
									<h4>{category.name}</h4>
								</div>
							))}
						</div>
					</div>
				</div>
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
	if (state.blogcategories.errors) {
		errors = [...errors, Object.keys(state.blogcategories.errors).map(field => {
			return {field, message: state.blogcategories.errors[field]};
		})];
	}
	return {
		blogposts: state.blogposts,
		blogcategories: state.blogcategories,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchBlogposts: () => {
			dispatch(blogposts.fetchBlogposts());
	    },
		fetchBlogCategories: () => {
			dispatch(blogcategories.fetchBlogCategories());
	    },

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./Header";
import {blogposts} from "../actions";
import {blogcategories} from "../actions";

class Blog extends Component {
	state = {
		category: null
	}

	componentDidMount() {
		if (!this.props.blogposts.length){
	    	this.props.fetchBlogposts();
	    	this.props.fetchBlogCategories();
		}
	}	

	handleCategoryClick(category) {
		this.setState({category: category});
		this.props.fetchBlogposts(category);
	}
	
	render(){
		if (!this.props.blogposts.isLoading){
			return(
				<div>
					<Header />
					<div className="container">
						<div className="row">
							<div className="col-9">
								{this.props.blogposts.blogposts.map((blogpost) => (
									<div key={blogpost.id}>
										<h4>{blogpost.title}</h4>
										<p>{blogpost.text}</p>
										<p>{blogpost.owner}</p>
										<p>{blogpost.created_at}</p>
									</div>
								))}
							</div>
							<div className="col-3">
								<a href="#" onClick={()=>{this.handleCategoryClick(undefined)}}>All</a>
								{this.props.blogcategories.map((category) => (
									<div>
										<a href="#" onClick={()=>{this.handleCategoryClick(category.id)}}>{category.name}</a>
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
		fetchBlogposts: (category) => {
			dispatch(blogposts.fetchBlogposts(category));
	    },
		fetchBlogCategories: () => {
			dispatch(blogcategories.fetchBlogCategories());
	    },

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

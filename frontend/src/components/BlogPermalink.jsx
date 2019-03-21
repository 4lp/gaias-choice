import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {blogposts} from "../actions";

class BlogPermalink extends Component {
	componentDidMount() {
		const permalink = this.props.props.match.params.permalink;
		this.props.fetchBlogposts({permalink: permalink});
	}	

	render(){
		if (!this.props.blogposts.isLoading){
			return(
				<div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1>Blog</h1>
							</div>
							<div className="col-12">
									<div >
										<h4>{this.props.blogposts.blogposts.results[0].title}</h4>
										<p>
											<div dangerouslySetInnerHTML={{__html:this.props.blogposts.blogposts.results[0].text}}></div>
											<br/>
											<br/>
											<small>Posted by {this.props.blogposts.blogposts.results[0].owner} at {this.props.blogposts.blogposts.results[0].created_at}</small>
										</p>
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
		fetchBlogposts: (options) => {
			dispatch(blogposts.fetchBlogposts(options));
	    },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPermalink);

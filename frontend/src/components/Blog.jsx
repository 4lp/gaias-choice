import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {blogposts} from "../actions";
import {blogcategories} from "../actions";
import Collapsible from 'react-collapsible';
import MediaQuery from 'react-responsive';

class Blog extends Component {
	state = {
		category: [],
		page: 1,
	}

	componentDidMount() {
		if (!this.props.blogposts.length){
	    	this.props.fetchBlogposts(this.state);
		}
		if (!this.props.blogcategories.length){
	    	this.props.fetchBlogCategories();
		}
	}	

	handleCategoryClick(category) {
		if (this.state.category.includes(category)){
			let index = this.state.category.indexOf(category);
			let newCategories = [...this.state.category]
			newCategories.splice(index, 1)
			this.setState({category: newCategories, page: 1}, async () => {this.props.fetchBlogposts(this.state)});
		} else {
			this.setState({category: [...this.state.category,category], page: 1}, async () => {this.props.fetchBlogposts(this.state)});
		}
	}

	handlePageClick(page) {
		this.setState({page: page}, async () => {this.props.fetchBlogposts(this.state)});
	}
	
	render(){
		if (!this.props.blogposts.isLoading){
			let pages = Math.floor(this.props.blogposts.blogposts.count / 5) + 1;
			return(
				<div>
					<div className="container-fluid blog">
						<div className="row blog-row">
							<div className="col-12 text-center">
								<h2 className="page-title">Blog</h2>
							</div>
							<div className="col-12 col-md-9 order-sm-2 order-1">
								{this.props.blogposts.blogposts.results.map((blogpost) => (
									<div key={blogpost.id}>
										<h4><span>{blogpost.title}</span></h4>
										<p>
											<div dangerouslySetInnerHTML={{__html:blogpost.text}}>
											</div>
											<br/>
											<br/>
											<small>Posted by {blogpost.owner_name} at {blogpost.created_at}</small>
											<Link to={"/blog/"+blogpost.permalink}><small style={{float:"right"}}>Permalink</small></Link>
										</p>
									</div>
								))}
							</div>
							<MediaQuery query="(max-device-width: 576px)">
								<Collapsible trigger="Categories" className="col-12 order-sm-1 align-self-start text-right">
									<div>
										{this.props.blogcategories.map((category) => {
											return (<div className="form-check"><input className="form-check-input" type="checkbox" onChange={()=>{this.handleCategoryClick(category.id)}} /><label className="form-check-label">{category.name}</label></div>)
										})}
									</div>
								</Collapsible>
							</MediaQuery>
							<MediaQuery query="(min-device-width: 576px)">
								<div className="col-12 col-md-3 order-2 category-list align-self-start">
									<h4>Categories</h4>
									{this.props.blogcategories.map((category) => {
										return (<div className="form-check"><input className="form-check-input" type="checkbox" onChange={()=>{this.handleCategoryClick(category.id)}} /><label className="form-check-label">{category.name}</label></div>)
									})}
								</div>
							</MediaQuery>
							<div className="col-12 order-3">
								{this.state.page !== 1 &&
									<a href="#" className="pagination" onClick={()=>{this.handlePageClick(this.state.page-1)}}>«</a>
								}
								{/* basically range(count) */}
								{[...Array(pages).keys()].map((page) => {
									if (this.state.page !== page + 1){
										return (<a href="#" className="pagination" onClick={()=>{this.handlePageClick(page)}}>{page + 1}</a>)
									} else {
										return (<span className="pagination">{page + 1}</span>)
									}
								})}
								{this.state.page !== pages &&
									<a href="#" className="pagination" onClick={()=>{this.handlePageClick(this.state.page+1)}}>»</a>
								}
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

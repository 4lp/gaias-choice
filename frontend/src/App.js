import React, { Component } from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, Redirect, matchPath} from 'react-router-dom';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Provider, connect } from "react-redux";
import gaiasApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ContactPage from './components/ContactPage';
import 'react-router-modal/css/react-router-modal.css';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { LastLocationProvider, withLastLocation } from 'react-router-last-location';
import Blog from "./components/Blog";
import Products from "./components/Products";
import MissionStatement from "./components/MissionStatement";
import Experience from "./components/Experience";
import WhyWereDoingThis from "./components/WhyWereDoingThis";
import ProductDetail from "./components/ProductDetail";
import Template from "./components/Template";
import {products} from "./actions";

let store = createStore(gaiasApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

	componentDidMount() {
		if (!this.props.products.length){
	    	this.props.fetchProducts();
		}
	}	

	render() {
		let {AsyncRoute} = this;
		if (!this.props.products.isLoading){
			return (
				<BrowserRouter>
					<div>
						<div>
							<Switch>
								<Route exact path="/contact" render={(props) => ( <Template component={<ContactPage/>} products={this.props.products}/> )} />
								<Route exact path="/blog" render={(props) => ( <Template component={<Blog/>} products={this.props.products}/> )} />
								<Route exact path="/products" render={(props) => ( <Template component={<Products products={this.props.products}/>} products={this.props.products}/> )} />
								<Route path="/products/:productname" render={(props) => ( <Template component={<ProductDetail products={this.props.products} />} products={this.props.products} {...props}/> )} />
								<Route exact path="/mission-statement" render={(props) => (<Template component={<MissionStatement/>} products={this.props.products}/> )} />
								<Route exact path="/experience" render={(props) => ( <Template component={<Experience/>} products={this.props.products}/> )} />
								<Route exact path="/why-were-doing-this" render={(props) => (<Template component={<WhyWereDoingThis/>} products={this.props.products}/> )} />
								<Route path="/" render={(props) => ( <Template component={<Home/>} products={this.props.products}/> )} />
								<Route component={NotFound} />
							</Switch>
						</div>
						<div>
							<ModalContainer />
						</div>
					</div>
				</BrowserRouter>
			);
		} else {
			return(<div>Loading...</div>)
		}
	}
}


const mapStateToProps = state => {
	let errors = [];
	if (state.products.errors) {
		errors = Object.keys(state.products.errors).map(field => {
			return {field, message: state.products.errors[field]};
		});
	}
	return {
		products: state.products,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchProducts: () => {
			dispatch(products.fetchProducts());
	    },
	}
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent)

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<RootContainer />
			</Provider>
		)
	}
}

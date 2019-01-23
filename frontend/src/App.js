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
import ProductDetail from "./components/ProductDetail";
import {products} from "./actions";

let store = createStore(gaiasApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

	AsyncRoute = ({component: ChildComponent, ...rest}) => {
		return <Route {...rest} render={props => {
			{/*{if (this.props.auth.isLoading) {
				return <em>Loading...</em>;
			} else {*/}
				return <ChildComponent {...props} />
			{/*}*/}
		}} />
	}

	render() {
		let {AsyncRoute} = this;
		return (
			<BrowserRouter>
				<div>
					<div>
						<Switch>
							<AsyncRoute path="/contact" component={ContactPage} />
							<AsyncRoute path="/blog" component={Blog} />
							<Route exact path="/products" render={(props) => ( <Products products={this.props.products}/> )} />
							<Route path="/products/:productname" render={(props) => ( <ProductDetail products={this.props.products} {...props}/> )} />
							<AsyncRoute path="/" component={Home} />
							<Route component={NotFound} />
						</Switch>
					</div>
					<div>
						<ModalContainer />
					</div>
				</div>
			</BrowserRouter>
		);
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

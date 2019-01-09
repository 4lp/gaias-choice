import React, { Component } from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, Redirect, matchPath} from 'react-router-dom';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Provider, connect } from "react-redux";
import gaiasApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Contact from './components/Contact';
import 'react-router-modal/css/react-router-modal.css';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { LastLocationProvider, withLastLocation } from 'react-router-last-location';
import Blog from "./components/Blog";
import Products from "./components/Products";

let store = createStore(gaiasApp, applyMiddleware(thunk));

{/*modal route hack :( */}
class RenderBlocker extends React.Component {
	shouldComponentUpdate(nextProps) {
		return !nextProps.block;
	}

	render() {
		return this.props.children;
	}
}

class RootContainerComponent extends Component {
	state = {
		shouldPageUpdate: true,
	}

	componentDidMount() {
	}

	componentDidUpdate(prevProps) {
		{/*if (prevProps !== this.props) {
			const onModal = matchPath(window.location.pathname, { path: '/contact' }) !== null;
			this.setState({ shouldPageUpdate: !onModal });
		}*/}
	}

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
		let {AsyncRoute, lastLocation} = this;
		return (
			<BrowserRouter>
			<LastLocationProvider>
				<div>
					<div>
						<ModalRoute
							parentPath={lastLocation} 
							path="/contact" 
							component={Contact} 
							className='example-modal'
		  				    inClassName='example-modal-in'
						    outClassName='example-modal-out'
							backdropClassName='example-backdrop'
							backdropInClassName='example-backdrop-in'
							backdropOutClassName='example-backdrop-out'
							outDelay={500}
						/>
						<RenderBlocker block={!this.state.shouldPageUpdate}>
							<Switch>
								<AsyncRoute path="/blog" component={Blog} />
								<AsyncRoute path="/products" component={Products} />
								<AsyncRoute path="/" component={Home} />
								<Route component={NotFound} />
							</Switch>
						</RenderBlocker>
					</div>
					<div>
						<ModalContainer />
					</div>
				</div>
			</LastLocationProvider>
			</BrowserRouter>
		);
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

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<RootContainer />
			</Provider>
		)
	}
}

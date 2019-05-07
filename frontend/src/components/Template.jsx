import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";


export default class Template extends Component {
	render(){
		let props = this.props;
		return (
			<div>
				<Header />
				<div id="content">
					{React.cloneElement(props.component, props={props})}
				</div>
				<Footer products={this.props.products}/>
			</div>
		)
	}
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';


export default class Header extends Component {
	render(){
		return(
			<div id="header">
			    <div style={{float: "right", position: "relative", zIndex: 2}}>
					<Collapsible trigger="Menu"> 
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/products">Products</Link></li>
							<li><Link to="https://shop.medicalmarijuanainc.com/">Shop</Link></li>
							<li><Link to="/contact">Contact Us</Link></li>
						</ul>
					</Collapsible>
			    </div>
				<Link to="/" style={{textAlign: "center", color: "black"}}><h4>Gaia&apos;s Choice</h4></Link>
				<br/>
			</div>
		)
	}
}

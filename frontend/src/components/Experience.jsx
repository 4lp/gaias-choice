import React, {Component} from 'react';

export default class Experience extends Component {
	render(){
		return (
			<div>
				<div className="container-fluid aboutus">
					<div className="row aboutus-row">
						<div className="col-12">
						<h2 className="text-center">About Us</h2>
							<p className="text-center">
								Gaia’s Choice was founded when a group of us Austin locals got together with a passion to immerse ourselves in our community by providing natural and safe products. 
								With a combined 19 years in manufacturing and experience in research and development at a top medical cannabis company, we have the knowledge to provide our community 
								with education on something that we believe in. 
							</p>
							<p className="text-center">
								Our mission is to enrich the lives within our community through quality products that they can trust.
							</p>
							<p className="text-center">
								<h3 className="text-center"><strong>Meet our Team</strong></h3>
								<br/>
								<dl>
									<dt>Kevin Kammerman</dt><dd>CEO/Cheif Financial Officer</dd>
									<dt>Danny Moore</dt><dd>Cheif Science Officer</dd>
									<dt>George Chen</dt><dd>Cheif Operations Officer</dd>
									<dt>Morgan Murphy</dt><dd>Cheif Marketing Officer</dd>
								</dl>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

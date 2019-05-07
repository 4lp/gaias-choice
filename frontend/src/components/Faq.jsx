import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default class Faq extends Component {
	render(){
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="text-center">Faq</h3>
							<Accordion>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											What is the difference between hemp and marijuana?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											The question we hear all the time is, what is the difference between hemp and marijuana? 
											When it comes down to it, there are some major ways in which industrial hemp and marijuana differ. 
											Just looking at the appearance of the two plants marijuana resembles a short and fat bush while hemp plants tend to be very tall and skinny. 
											This plays into the difference in an environment where both are grown. Hemp is grown closely together and is typically grown in large multi-acre plots. 
											It can also grow in a variety of climates. But, unlike hemp, marijuana requires very specific conditions where it can grow and is “ruined” when encountering those non-ideal conditions. 
											The biggest difference between the two, however, is its chemical composition. In the eyes of the federal government, hemp is deemed as a cannabis plant 
											with a concentration of less than 0.3% THC which they call “Low THC”. This means that ingestible products derived from hemp are essentially impossible to 
											make you “high” or feel and psychoactive effect.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											What are the federal regulations on CBD?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											On December 20, 2018, the 2018 Farm Bill was signed into law which included the Hemp Farming Act of 2018. 
											What the Hemp Farming Act of 2018 did was remove hemp from Schedule I controlled substances and making it an ordinary agricultural commodity. 
											What does all this mean? It means hemp (as well as CBD) is legal in all 50 states! (add a picture or a gif here) 
											The bill also allows states and tribes to submit a plan and apply for primary regulatory authority over the production of hemp in their state or in their tribal territory. 
											A state plan must include certain requirements, such as keeping track of land, testing methods, and disposal of plants or products that exceed the allowed THC concentration.
											For any specific state laws and regulations please visit&nbsp; 
											<a href="http://www.ncsl.org/research/agriculture-and-rural-development/state-industrial-hemp-statutes.aspx" target="_blank">
												http://www.ncsl.org/research/agriculture-and-rural-development/state-industrial-hemp-statutes.aspx
											</a>.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											What makes our CBD rich hemp oils so special?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											<ul style={{listStyle: "circle"}}>
												<li>All of the plants used are grown in pure clean soils in Non-GMO countries and without pesticides, herbicides or chemical fertilizers, bringing you the clean products right from the start.</li>
												<li>The heirloom legacy Hemp seed is set in ideal growing conditions to yield the most luscious and sustainable crops.</li>
												<li>It is extracted in a cGMP legal facility.</li>
												<li>
													We use the cleanest and safest way to extract the CBD from the cannabis plant. How do we do it? Through supercritical CO2 extraction. 
													Using the CO2 extraction method we are able to stay away from using toxic solvents that many CBD manufacturers use to extract their CBD hemp oil.
												</li>
												<li>Fully lab tested in multiple areas, including microbials and pesticides, as well as for terpenes, and Cannabinoid profiles.</li>
											</ul>
										</p>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

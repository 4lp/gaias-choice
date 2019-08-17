import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
				<div className="container-fluid faq">
					<div className="row faq-row">
						<div className="col-12">
							<h3 className="text-center page-title">F.A.Q.</h3>
							<p>
								Have a question? Check out the answers below to some of our frequently asked questions! Not seeing what you are looking for? That’s OK! <Link className="decorated-link" to="/contact">Contact us</Link> and we will get back to you as soon as we can. 
							</p>
							<Accordion allowMultipleExpanded="true" allowZeroExpanded="true">
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											What are the benefits of CBD?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Because CBD oil has not been FDA approved as a cure or treatment for any disease, Gaia’s Choice does not make or support any medical claims related to hemp CBD oil. 
											With that being said, there has been plenty of scientific and clinical research—much of it sponsored by the US government—underscores CBD’s potential as a treatment 
											for a wide range of conditions, including arthritis, diabetes, alcoholism, MS, chronic pain, schizophrenia, PTSD, depression, antibiotic-resistant infections, 
											epilepsy, and other neurological disorders. CBD has demonstrable neuroprotective and neurogenic effects, and its anti-cancer properties are currently being investigated 
											at several academic research centers in the United States and elsewhere. 
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											What is the endocannabinoid system?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											The endocannabinoid system (ECS) refers to endocannabinoids, the enzymes that regulate their production and degradation, and their receptors. Endocannabinoids are messengers, isolated from brain and peripheral tissues that communicate via cannabinoid receptors.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Will CBD get me high?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											No, it will not is the simple answer. The psychoactive chemical from cannabis THC, is not present.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Will I flunk a drug test if I medicate with CBD.
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											A high-quality CBD product with minimal THC is incredibly unlikely to show up on a drug test. However, low quality CBD products may contain more traces of THC than they claim, in which case it is possible for a screening to pick up on the drug. (Research has shown that people who consume 6 mg of THC per day have a 25% chance of failing a drug test. This translates to about 2,000 mg per day of CBD oil with a THC content of 0.3% or less). 
											<br/>
											<a href="https://www.usdrugtestcenters.com/drug-test-blog/181/can-you-fail-a-drug-test-due-to-cbd.html" className="decorated-link" target="_blank">More info here</a>
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Does CBD interact with other medications?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											The simple answer is yes, it can. CBD has the potential to reduce or increase the effects of other drugs. If you are concerned always speak to a physician first.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											How do I know what doses of CBD I should take?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											As there is still a lot to learn about CBD there are not specific dosages that have been determined from medical trials. With that being said many companies have dosage suggestions and you can <a className="decorated-link" target="_blank" href="https://medium.com/cbd-origin/whats-the-best-cbd-dosage-81ec4f95503b">find our favorite here.</a>  The adage “start low and go slow” is always a good rule of thumb as well. If you have any concerns regarding the consumption or use of our products or and CBD product please talk to a medical professional.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Is CBD natural?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Yes, CBD is 100% naturally-occurring.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Are there side effects of using CBD? Is it safe?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Most research has concluded that CBD is perfectly safe with no known side effects, though some users have reported drowsiness, lightheadedness, low blood pressure, and dry mouth. With this industry still being very new and unregulated always do your research when looking into the CBD product supplier of your choice.
											<br/>
											<a href="https://purekana.com/blogs/news/cbd-faq-and-guide/" className="decorated-link" target="_blank">More info here</a>
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Is there research being done about CBD?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Yes, there are thousands of ongoing scientific studies at any given time. One of our favorites is the non-profit organization Project CBD, who are dedicated to documenting the research of this incredible compound.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											When does CBD expire?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											CBD products are good for at least a 1-year shelf life depending on the product you are purchasing. Things like oils and honey stay fresh longer than something like an edible. 
											<br/>
											<a href="https://www.dixiebotanicals.com/does-cbd-oil-go-bad/" className="decorated-link" target="_blank">More info here</a>
										</p>
									</AccordionItemPanel>
								</AccordionItem>
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
							<br/><br/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

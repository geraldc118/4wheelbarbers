import React from "react";
import '../Css/Pricing.css';

function Pricing(){
    return(
        <section id="pricing" className="pricingSection py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="pricingHead mb-5">Our Pricing</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="pricingList">
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Beard & Shape Up</h3>
                                <p className="pricingPrice">£25</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Classic Haircut</h3>
                                <p className="pricingPrice">£30</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Classic Haircut & Wash</h3>
                                <p className="pricingPrice">£40</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Haircut & Beard Trim</h3>
                                <p className="pricingPrice">£50</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Haircut,Beard Trim,Wash & Head Massage</h3>
                                <p className="pricingPrice">£90</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Bundle Deals (6 Classic Haircuts)</h3>
                                <p className="pricingPrice">£140</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Bundle Deals (6 Haircuts & Beard)</h3>
                                <p className="pricingPrice">£250</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">New Bundle Deal (Unlimited Monthly Haircut, Beard Trim & Wash)</h3>
                                <p className="pricingPrice">£400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;

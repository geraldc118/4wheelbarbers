import React from "react";
import '../Css/Pricing.css';

function Pricing(){
    return(
        <section id="pricing" className="pricingSection py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="sectionTitle mb-5">Our Pricing</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="pricingList">
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Classic Haircut</h3>
                                <p className="pricingPrice">£30</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Haircut & Beard Trim</h3>
                                <p className="pricingPrice">£50</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Bundle Deals (6 Haircuts)</h3>
                                <p className="pricingPrice">£150</p>
                            </div>
                            <div className="pricingItem">
                                <h3 className="pricingTitle">Bundle Deals (6 Haircuts & Beard)</h3>
                                <p className="pricingPrice">£220</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;

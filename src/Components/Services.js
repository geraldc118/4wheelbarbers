import React from "react";
import { Link } from "react-router-dom";
import '../Css/Services.css';
import hair1 from '../Images/hair1.jpg';
import hair2 from '../Images/hair2.jpg';
import hair3 from '../Images/hair3.jpg';

function Services() {
  return (
    <section id="services" className="servicesSection py-5">
      <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="sectionTitle mb-5">Our Services</h2>
                </div>
            </div>

                {/* Classic Cuts */}
            <div className="row mb-5 serviceRow">
                <div className="col-md-12">
                    <img className="serviceImg img" src={hair1} alt="Classic haircut" />
                </div>
                <div className="col-md-12">
                    <div className="serviceText">
                        <h3 className="serviceTitle">Classic Cuts</h3>
                        <p>
                            Experience a precision cut with our classic service. Whether you’re going for a sleek, modern look or keeping it timeless, we’ll deliver a sharp finish that’s styled to perfection. Enjoy the care and skill of traditional Turkish barbering, right at your doorstep.
                        </p>
                    </div>
                </div>
            </div>

                
            {/* Classic Cuts */}
            <div className="row mb-5 serviceRow">
                <div className="col-md-12">
                    <img className="serviceImg img-fluid" src={hair2} alt="Classic haircut" />
                </div>
                <div className="col-md-12">
                    <div className="serviceText">
                        <h3 className="serviceTitle">Haircut & Beard Trim</h3>
                        <p>
                            Get the full Turkish grooming experience with both a haircut and beard trim. Your hair and beard will be expertly shaped and refined to complement each other, giving you a clean, sharp appearance. Perfect for those who want a complete, polished look.
                        </p>
                    </div>
                </div>
            </div>
                
                {/* Group Bundles */}
            <div className="row mb-5 serviceRow">
                <div className="col-md-12">
                    <img className="serviceImg img-fluid" src={hair3} alt="Classic haircut" />
                </div>
                <div className="col-md-12">
                    <div className="serviceText">
                    <h3 className="serviceTitle">Bundle Deals</h3>
                    <p>
                        <strong>6 Haircuts:</strong> Commit to looking your best all year with a bundle of six expertly crafted haircuts, brought to you with the care and attention to detail that only a Turkish-style barber can provide.
                    </p>
                    <p>
                        <strong>6 Haircuts & Beard Trims:</strong> Keep both your hair and beard in top shape with our bundle of six haircuts and beard trims, ensuring you stay sharp and well-groomed for months to come.
                    </p>
                    <p>These bundles are perfect for those who value convenience and consistent quality!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Link to="/contact" class="btn btn-primary w-50">Book A Haircut</Link>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;


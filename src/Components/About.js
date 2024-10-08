import React from "react";
import '../Css/About.css';
import { Link } from "react-router-dom";

function About(){
    return(
        <section className="aboutHead">
            <div className="container">
                <div className="row">
                    {/* <div className="col-12">
                        <img src={Logo} className="logo" alt="logo"/>
                    </div> */}
                    <h2 className="sectionHead">About Us</h2>
                    <div className="col-12">
                        <p className="sectionText">At 4 Wheel Barbers, we pride ourselves on offering top-notch mobile barbering services. With over 15 years in the industry, our expert barbers provide you with the highest quality grooming, tailored to your needs, in the comfort of your own home.</p>
                        <p className="sectionText">We know that your time is valuable, so we bring the barbershop experience directly to your doorstep. From classic haircuts to modern styles, our team is equipped with the latest tools and techniques to ensure you always look your best.</p>
                        <p className="sectionText">We cover South East London, Essex, and Kent, ensuring our services are accessible wherever you are. Our goal is to create an environment where you can relax and enjoy the convenience of professional grooming without leaving your home.</p>
                        <p className="sectionText">We understand that each client is unique, and we take the time to get to know you, your preferences, and your lifestyle, so we can deliver a personalized service that exceeds your expectations.</p>
                    </div>
                    <div className="col-12">
                        <Link to="/contact" class="btn btn-primary w-50">Book A Haircut</Link>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default About;
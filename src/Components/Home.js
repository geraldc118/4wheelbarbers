import React from "react";
import '../Css/Home.css'
import wheel_Logo from '../Images/4Wheel_logo.png';
import About from './About';
import hair1 from '../Images/hair1.jpg';
import hair2 from '../Images/hair2.jpg';
import hair3 from '../Images/hair3.jpg';
import Pricing from "./Pricing";


function Home(){
    return(
        <header className="header bg-dark text-light py-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                       <div className="imgHolder">
                            <img src={wheel_Logo} className="logo rounded circle" alt="4 wheel logo"/>
                            <h1 className="display-4">4 Wheel Barbers</h1>
                            <p className="lead">Bringing the Barbershop Experience to Your Doorstep</p>
                        </div>
                    </div>
                </div>
            </div>
            <About />

            {/* Services */}
            <section className="image-cards-section py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="section-title mb-5">Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card imageCard">
                            <img src={hair1} className="card-img-top rounded-circle" alt="Service 1"/>
                            <div className="card-body">
                                <h5 className="card-title">Classic Cuts</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card imageCard">
                            <img src={hair2} className="card-img-top rounded-circle" alt="Service 2"/>
                            <div className="card-body">
                                <h5 className="card-title">Haircut & Beard</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card imageCard">
                            <img src={hair3} className="card-img-top rounded-circle" alt="Service 3"/>
                            <div className="card-body">
                                <h5 className="card-title">Bundles</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Pricing />

        {/* Contact  */}
        <section id="contact" className="contactSection py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="section-title text-center">Get in Touch</h2>
                        <p className="section-text text-center">Want to book an appointment? Reach out to us today!</p>
                        <form className="contact-form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" id="name" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlfor="email" className="form-label">Email:</label>
                                <input type="email" id="email" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlfor="number" className="form-label">Number:</label>
                                <input type="num" id="number" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlfor="message" className="form-label">Message:</label>
                                <textarea id="message" className="form-control" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> 
    </header>

        
    )
}

export default Home;
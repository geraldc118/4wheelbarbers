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
        <header classname="header bg-dark text-light py-3">
            <div classname="container text-center">
                <div className="row">
                    <div className="col-12">
                       <div className="imgHolder">
                            <img src={wheel_Logo} classname="logo rounded circle" alt="4 wheel logo"/>
                            <h1 classname="display-4">4 Wheel Barbers</h1>
                            <p classname="lead">Bringing the Barbershop Experience to Your Doorstep</p>
                        </div>
                    </div>
                </div>
            </div>
            <About />

            {/* Services */}
            <section class="image-cards-section py-5">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12">
                        <h2 class="section-title mb-5">Our Services</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card image-card">
                            <img src={hair1} class="card-img-top rounded-circle" alt="Service 1"/>
                            <div class="card-body">
                                <h5 class="card-title">Classic Cuts</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card image-card">
                            <img src={hair2} class="card-img-top rounded-circle" alt="Service 2"/>
                            <div class="card-body">
                                <h5 class="card-title">Haircut & Beard</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card image-card">
                            <img src={hair3} class="card-img-top rounded-circle" alt="Service 3"/>
                            <div class="card-body">
                                <h5 class="card-title">Bundles</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Pricing />

        {/* Contact  */}
        <section id="contact" class="contactSection py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h2 class="section-title text-center">Get in Touch</h2>
                        <p class="section-text text-center">Want to book an appointment? Reach out to us today!</p>
                        <form class="contact-form">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name:</label>
                                <input type="text" id="name" class="form-control" required/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" id="email" class="form-control" required/>
                            </div>
                            <div class="mb-3">
                                <label for="number" class="form-label">Number:</label>
                                <input type="num" id="number" class="form-control" required/>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message:</label>
                                <textarea id="message" class="form-control" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> 
        </header>

        
    )
}

export default Home;
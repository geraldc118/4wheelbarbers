import React from "react";
import '../Css/Contact.css';

function Contact(){
    return(
        <section id="contact" class="contact-section py-5">
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
                                <input type="num" id="num" class="form-control" required/>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message:</label>
                                <textarea id="message" class="form-control" rows="5" required></textarea>
                            </div>
                            <button type="submit" class=" slut btn btn-primary w-100">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Contact;
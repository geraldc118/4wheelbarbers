import React from "react";
import '../Css/Contact.css';

function Contact(){
    return(
        <section id="contact" className="contact-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="sectionTitle text-center">Get in Touch</h2>
                        <p className="sectionText text-center">Want to book an appointment? Reach out to us today!</p>
                        <form className="contact-form">
                            <div className="mb-3">
                                <label htmlfor="name" className="form-label">Name:</label>
                                <input type="text" id="name" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlfor="email" className="form-label">Email:</label>
                                <input type="email" id="email" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlfor="number" className="form-label">Number:</label>
                                <input type="num" id="num" className="form-control" required/>
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
    )
}

export default Contact;
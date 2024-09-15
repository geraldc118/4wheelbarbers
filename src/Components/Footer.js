import React from "react";
import '../Css/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-dark py-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                    <a className="contactLink" href="mailto:4wheelbarbers@yahoo.com">Email: 4wheelbarbers@yahoo.com</a>
                    <a className="contactLink" href="tel:+447756235725">Call: 07756235725</a>
                        <div className="footerText">
                            <p className="footerLink">&copy; 2024 | 4 Wheel Barbers. All rights reserved.</p>
                            <Link className="footerLink" to="/terms&conditions">Terms & Conditions</Link>
                            <Link className="footerLink" to="/privacyPolicy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>        
        </footer>
                    
                            
                        
                    
    );
}

export default Footer;

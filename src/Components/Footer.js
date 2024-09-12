import React from "react";
import '../Css/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-dark py-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <div className="footerText">
                            <p>&copy; 2024 | 4 Wheel Barbers. All rights reserved.</p>
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

import React from "react";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import "./contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div className="contactWrapper">
                <Navbar />
                <br />
                <div className="contactContainer">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfG6jKxUG-hpOeVPalFyIVxRXAezwNywWzTs2JUby0gV-6iAg/viewform?embedded=true" width="640" height="1071" frameBorder="0" marginHeight="0" marginWidth="0" title="jimForm">Loading…</iframe>
                </div>
                <br />
                <Footer />
            </div>
        )
    }
}

export default Contact;
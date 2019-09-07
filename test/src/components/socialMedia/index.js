import React from 'react';
import './socialMedia.css';

export default class SocialMedia extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="socialMediaWrapper">
                    <div className="d-flex flex-column socialConentWrapper">
                        <p id="followMeParagraph">Follow me on social media.</p>
                        <div className="justify-content-center" id="socialMediaContainer">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jimtatarakis?lang=en" className="socialMediaLink">
                                <i className="fab fa-twitter fa-4x socialMediaIcon"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jamestatarakis/" className="socialMediaLink">
                                <i className="fab fa-instagram fa-4x socialMediaIcon"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-tatarakis-9a595394/" className="socialMediaLink">
                                <i className="fab fa-linkedin fa-4x socialMediaIcon"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/JimTatarakis" className="socialMediaLink">
                                <i className="fab fa-github fa-4x socialMediaIcon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
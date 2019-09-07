import React from 'react';
import './footer.css';

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="footerWrapper">
                        <div id="copyRightContainer">
                            <p className="text-center">Jim Tatarakis &copy; 2019</p>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}
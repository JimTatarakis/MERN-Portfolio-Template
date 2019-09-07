import React from "react";
import "./smallScreen.css";
import LinkBtn from "../linkBtn"

export default function SmallScreen () {
    return (
        <React.Fragment>
                   <div className="smallLandingWrapper">
            <LinkBtn content="Welcome." link="/home" id="smallLandingBtn" />
            </div>
        </React.Fragment>
    )
}
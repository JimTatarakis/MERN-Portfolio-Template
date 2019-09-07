import React from "react";
import "./largeScreen.css";
import LinkBtn from "../linkBtn"

export default function LargeScreen () {
    return (
        <React.Fragment>
            <div className="largeLandingWrapper">
            <LinkBtn content="Welcome ." link="/home" id="largeLandingBtn" />
            </div>
        </React.Fragment>
    )
}
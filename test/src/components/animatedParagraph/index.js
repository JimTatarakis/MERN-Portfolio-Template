import React from 'react';
import { Animated } from "react-animated-css";

const AnimatedParagraph = (props) => {
    return (
        <Animated animationIn={props.animate} animationInDuration={1400} isVisible={true}>
            <div id={props.id}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </Animated>
    )
};

export default AnimatedParagraph;
import React from 'react'
import './technologiesKnown.css'
import { Animated } from "react-animated-css"

export default function TechnologiesKnown() {
    return (
        <React.Fragment>
            <Animated animationIn="fadeInRight" animationInDuration={1400} isVisible={true}>
            <h2>Technologies Known . .</h2>
            <h4>MERN Full-Stack Development</h4>
            <div className="technologyImgContainer">
                <img className="technologyImg" id="mongodbImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/512px-Antu_mongodb.svg.png" alt="Mongodb"></img>
                <img className="technologyImg" id="nodeImg" src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png" alt="Node.js"></img>
                <img className="technologyImg" id="reactImg" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" alt="React.js"></img>
                <img className="technologyImg" id="reactImg" src="https://avatars2.githubusercontent.com/u/317889?v=300s=400" alt="Sass"></img>
                <img className="technologyImg" id="reactImg" src="http://www.d0wn.com/wp-content/uploads/mysql-logo-256x256.png" alt="MySQL"></img>
                <img className="technologyImg" id="reactImg" src="https://www.zdrojak.cz/wp-content/uploads/2016/07/Firebase_16-logo.png" alt="Firebase"></img>
            </div>
            </Animated>
        </React.Fragment>
    )
}
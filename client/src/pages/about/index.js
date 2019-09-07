import React from 'react'
import Navbar from '../../components/navbar'
import AnimatedParagraph from '../../components/animatedParagraph'
import TechnologiesKnown from '../../components/technologiesKnown'
import Footer from '../../components/footer'
import SocialMedia from '../../components/socialMedia'
import './about.css'
import Jim from '../../assets/jim-selfie.jpg'

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="aboutWrapper">
            <Navbar />
            <div className="aboutTechnologyContainer float-md-left">
                <TechnologiesKnown />
            </div><br />
            <div className="aboutIntroContainer">
            <div className="float-md-right">
            <img src={Jim} alt="Jim" id="jimPic"></img>
            </div>
            <div className="aboutParagraphOneWrapper float-md-left">
            <AnimatedParagraph animate="fadeInLeft" title="Who I am . ." content="A junior developer. Currently, I am working on expanding my
                        portfolio and developing my skills. My main sources of energy
                        have been my three kids and energy drinks. Learning from my
                        failures; each forgotten quotation and every unclosed function, I
                        learn more technical skills of being a developer." id="aboutParagraphOne" />
            </div><br />
            <div className="aboutParagraphTwoWrapper float-md-left">
            <AnimatedParagraph animate="fadeInRight" title="I am becoming . . ." content="I am working towards becoming a well established full-stack web
                        developer. In the future, I will have a job that not only
                        supports my family, but I will be proud to have. I want to work
                        on projects outside of work as well, showing the community one
                        project at a time what technology can do to help. At heart I
                        love teaching and mentoring, I would like to use that with
                        technology as a method of helping others outside of work." id="aboutParagraphTwo" />
                        <br />
                        <SocialMedia />
            </div><br />
            </div>
            <Footer />
            </div>
        </React.Fragment>
    )
}
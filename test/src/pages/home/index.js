import React from 'react'
import Navbar from '../../components/navbar'
import AnimatedParagraph from '../../components/animatedParagraph'
import LinkBtn from '../../components/linkBtn'
import Footer from '../../components/footer'
import './home.css'

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="homeWrapper">
            <Navbar />
            <br /><br />
            <br /><br />
            <AnimatedParagraph animate="fadeInLeft" title="Molding Your Imagination into reality . ." content="It's what I do ." id="paragraphOne" />
            <AnimatedParagraph animate="fadeInRight" title="From Design to Delpoyment" content="Full Stack Developer, here to help ." id="paragraphTwo" />
            <LinkBtn link="/projects" content="view my Work ." id="viewMyProjectsBtn" />
            <Footer />
            </div>
        </React.Fragment>
    )
}
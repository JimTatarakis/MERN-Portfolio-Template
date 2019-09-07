import React from 'react';
import { Link } from "react-router-dom";
import Resume from '../../assets/JimTatarakisResume.pdf'
// import './Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">Jim Tatarakis</Link>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${classOne}`} id="navbarColor01">
                        <div className="navbar-nav mr-auto">
                            <div className="nav-item" >
                                <div className="router-link">
                                    <Link className="text-decor nav-link" to="/home">home</Link>
                                </div>
                            </div>
                            <div className="nav-item" >
                                <div className="router-link">
                                    <Link className="text-decor nav-link" to="/projects">projects</Link>
                                </div>
                            </div>
                            <div className="nav-item" >
                                <div className="router-link">
                                    <Link className="text-decor nav-link" to="/about">about</Link>
                                </div>
                            </div>
                            <div className="nav-item" >
                                <div className="router-link">
                                    <Link className="text-decor nav-link" to="/contact">contact</Link>
                                </div>
                            </div>
                            <div className="nav-item" >
                                <div className="resume-link">
                                    <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-decor nav-link" >resume</a>
                                </div>
                            </div>
                            <div className="nav-item" >
                                <div className="router-link">
                                    <Link className="text-decor nav-link" to="/login">login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
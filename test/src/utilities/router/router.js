import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from '../../pages/landing';
import HomePage from '../../pages/home'
import About from '../../pages/about'
// import Contact from '../../pages/contact'
// import Login from '../../pages/login'

function AppRouter() {
    return (
     
        <Router>
            <Switch>
            <Route path="/" exact component={LandingPage} />
                <Route path="/home" exact component={HomePage} />
                <Route path="/about" component={About} />
                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path="/projects" component={Projects} /> */}
            </Switch>
        </Router>
        
    );
}

export default AppRouter;
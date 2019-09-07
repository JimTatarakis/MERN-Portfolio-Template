import React from 'react';
import { Link } from "react-router-dom";

const LinkBtn = (props) => {
    return (
        <React.Fragment>
            <Link to={props.link}><button type="button" className="btn btn-secondary" id={props.id}>{props.content}</button></Link>
        </React.Fragment>
    )
};

export default LinkBtn;
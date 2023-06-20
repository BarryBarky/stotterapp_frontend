import React from 'react';
import logo from '../img/logo.svg'
import {Link} from "react-router-dom";

const Logo = ({classes = ''}) => {
    return (
        <Link to={'/'} className={classes}>
            <img src={logo} alt={"logo"} className={"w-full"}></img>
        </Link>
    );
};

export default Logo;
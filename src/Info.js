import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


const Info = () => {
    return (
        <div>
            <p class="info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <button class="button3">
            <Link to="/levels">Start</Link>
            </button>
        </div>
    );
};

export default Info;
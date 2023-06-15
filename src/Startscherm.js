import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Startscherm = () => {
    return (
        <div>
            <h1> Stotter App </h1>
            <button class="button3">
            <Link to="/info">Start</Link>
            </button>
            <figure>
                <img src={require("./img/bram.png")} alt="Bram"></img>
            </figure>
        </div>
    );
};

export default Startscherm;
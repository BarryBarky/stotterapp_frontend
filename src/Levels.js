import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


const Levels = () => {
    return (
        <div>
            <figure>
                <img src={require("./img/finish.png")}></img>
            </figure>
            <ul class="levels">
            <li id="level4"> 4 </li>
            <li id="level3"> 3 </li>
            <li id="level2"> 2 </li>
            <li id="level1"> 1 </li>
            </ul>
        </div>
    );
};

export default Levels;
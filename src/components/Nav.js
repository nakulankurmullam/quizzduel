import React  from 'react'
import './nav.css'
// import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div className="topnav" id="myTopNav">
            <p className="active">Home</p>
            <p>Profile</p>
            <p>LogOut</p>
            <p className="icon" onClick={hamburger}>
                <i className="fa fa-bars"></i>
            </p>
        </div>
    )
}

function hamburger() {
    let x = document.querySelector('#myTopNav');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }             
}
import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"
import {auth} from '../firebase/firebaseConfig'

export default function Nav({currentlyActive}) {
  let nav = useNavigate();
  return (
    <div className="topnav" id="myTopNav">
      <p
        onClick={() => {
          nav("/");
        }}
        id="HOME"
        className={currentlyActive === "HOME" ? "active" : ""}
      >
        Home
      </p>
      <p
        onClick={() => {
          nav("/profile");
        }}
        id="PROFILE"
        className={currentlyActive === "PROFILE" ? "active" : ""}
      >
        Profile
      </p>
      <p
        onClick={() => {
          let confirmed = window.confirm("Are you sure you want to log out?")
          if(confirmed) {
            signOut(auth).then(() => {
              nav('/login');
            }).catch(err => {
              console.error(err);
            });  
          }
          
        }}
        id="LOGOUT"
        className={currentlyActive==="LOGOUT"?"active":""}
      >
        LogOut
      </p>
      <p className="icon" onClick={hamburger}>
        <i className="fa fa-bars"></i>
      </p>
    </div>
  );
}

function hamburger() {
  let x = document.querySelector("#myTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

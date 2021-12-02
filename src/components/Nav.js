import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav({currentlyActive}) {
  let nav = useNavigate();
//   function setActive(currentlyActive) {  
//     let home = document.getElementById("HOME"),
//       profile = document.getElementById("PROFILE"),
//       logout = document.getElementById("LOGOUT");
//     home.className = "inactive";
//     profile.className = "inactive";
//     logout.className = "inactive";
//     switch (currentlyActive) {
//       case "HOME":
//         home.className = "active";
//         break;
//       case "LOGOUT":
//         logout.className = "active";
//         break;
//       case "PROFILE":
//         profile.className = "active";
//         break;
//     }
//   }
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
          nav('/login');
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

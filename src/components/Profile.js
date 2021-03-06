import React, { useState ,  useContext } from "react";
import "./Profile.css";
import "./profile.png";
import { useNavigate } from "react-router-dom";
import {UserDetailsContext , AuthContext } from '../assets/contexts'
import Nav from "./Nav";
import Login from "./Login";

function Profile() {
  const {userInfo} = useContext(UserDetailsContext)
  const {isOnline} = useState(AuthContext)
  const [editable, setEditable] = useState(false);
  const nav = useNavigate();
  return isOnline? (
    <>
      <Nav currentlyActive="PROFILE"/>
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile-header">
            <h2>Profile</h2>
            <span onClick={() => nav("/")} id="close-btn">
              &times;
            </span>
          </div>
          <div className="profile-content">
            {editable && (
              <div className="editable-content">
                <div className="image-input">
                  <img
                    src={require("./profile.png")}
                    alt="Profile Pic"
                    id="profile-pic"
                    width="200"
                    height="200"
                  />
                  <label htmlFor="files" id="upload-btn">
                    <i class="fa-solid fa-upload"></i>
                  </label>
                  <input
                    type="file"
                    style={{ visibility: "hidden" }}
                    id="files"
                  />
                </div>
                <label htmlFor="uname">{userInfo.userName}</label>
                <input
                  type="text"
                  className="profile-input"
                  id="uname"
                  placeholder="name"
                />
                <label htmlFor="bio">{userInfo.description}</label>
                <input
                  type="text"
                  className="profile-input"
                  id="bio"
                  placeholder="bio"
                />
                <button className="edit-btn" onClick={() => setEditable(false)}>
                  SAVE
                  <i className="fa-solid fa-save"></i>
                </button>
              </div>
            )}
            {!editable && (
              <div className="non-editable-content">
                <img
                  src={require("./profile.png")}
                  alt="Profile Pic"
                  id="profile-pic"
                  width="200"
                  height="200"
                />
                <h4 id="uname-read-only">{userInfo.userName}</h4>
                <h4 id="bio-read-only">{userInfo.description}</h4>
                <button className="edit-btn" onClick={() => setEditable(true)}>
                  <i className="fa-solid fa-edit"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ):(<Login/>)
}

export default Profile;

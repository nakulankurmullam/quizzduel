import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="modal-box">
        <div className="header">
          <h2>Sign Up</h2>
          <span id="close-btn">&times;</span>
        </div>
        <form className="modal-content"> 
          <label htmlFor="#username">Choose a user name: </label> 
          <input type="text" placeholder="username" required /> 
          <label htmlFor="#email">Email: </label> 
          <input type="text" placeholder="example123@email.com" id="email" required /> 
          <label htmlFor="#pswd">Create password: </label> 
          <input id="pswd" type="password" placeholder="password" required /> 
          <label htmlFor="#pswd-confirm">Confirm password: </label> 
          <input type="password" id="pswd-confirm" placeholder="confirm password" required /> 
          <button id="submit-btn">SUBMIT</button> 
          <p>already have an account ?</p>
          <button id="login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;

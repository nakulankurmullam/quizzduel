import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="modal-box">
        <div className="header">
          <h2>Login</h2>
          <span id="close-btn">&times;</span>
        </div>
        <form className="modal-content">
          <label htmlFor="#username">Enter your email: </label>
          <input type="text" placeholder="example12@email.com" required />
          <label htmlFor="#pswd">Enter password: </label>
          <input id="pswd" type="password" placeholder="password" required />
          <button id="submit-btn">SUBMIT</button>
          <p>do not have an account ?</p>
          <button id="signup-btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

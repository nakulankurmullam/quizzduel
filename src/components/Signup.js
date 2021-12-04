import React, { useContext, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { UserDetailsContext, AuthContext } from "../assets/contexts";

function Signup() {
  const { userInfo, setUserInfo } = useContext(UserDetailsContext);
  const { setIsOnline } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Please enter a valid password");
    }
    if (password.length >= 8 && confirmed)
      (async () => {
        let userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ).catch((e) => {
          console.error(e);
        });
        userInfo.userName = userName;
        if (userCredentials) {
          userInfo.uid = userCredentials.user.uid;
          await setDoc(doc(db, "users", userInfo.uid), {
            uid: userCredentials.user.uid,
            userName: userName,
            email: email,
          }).catch((e) => {
            console.error("an error occured while creating user", e);
          });
          setUserInfo(userInfo);
          setIsOnline(true);
          nav("/");
        }
      })();
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(true);
  const nav = useNavigate();
  return (
    <div className="signup-container">
      <div className="modal-box">
        <div className="header">
          <h2>Sign Up</h2>
          <span
            onClick={() => {
              nav("/");
            }}
            id="close-btn"
          >
            &times;
          </span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="modal-content">
          <label htmlFor="#username">Choose a user name: </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="username"
            required
          />
          <label htmlFor="#email">Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="example123@email.com"
            id="email"
            required
          />
          <label htmlFor="#pswd">Create password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pswd"
            type="password"
            placeholder="minimum 8 letters"
            required
          />
          <label htmlFor="#pswd-confirm">Confirm password: </label>
          <input
            onChange={(e) => {
              setConfirmed(e.target.value === password);
            }}
            type="password"
            id="pswd-confirm"
            placeholder="confirm password"
            required
          />
          <button id="submit-btn">SUBMIT</button>
          <p>already have an account ?</p>
        </form>
        <button onClick={() => nav("/login")} id="login-btn">
          LOGIN
        </button>
      </div>
    </div>
  );
}
export default Signup;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext, UserDetailsContext } from "../assets/contexts";

function Login() {
  const { setIsOnline } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useContext(UserDetailsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      let userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((err) => {
        console.error(err);
        if (err.message === "Firebase: Error (auth/wrong-password).")
          alert("wrong password");
        alert("something went wrong, please try again");
      });
      if (userCredentials) {
        userInfo.uid = userCredentials.user.uid;
        const docRef = doc(db, "users", userCredentials.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.data()) {
          userInfo.userName = docSnap.data().userName;
          setUserInfo(userInfo);
          setIsOnline(true);
          nav("/");
        }
      }
    })();
  };
  return (
    <div className="login-container">
      <div className="modal-box">
        <div className="header">
          <h2>Login</h2>
          <span
            onClick={() => {
              nav("/");
            }}
            id="close-btn"
          >
            &times;
          </span>
        </div>
        <form onSubmit={handleSubmit} className="modal-content">
          <label htmlFor="#username">Enter your email: </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="example12@email.com"
            required
          />
          <label htmlFor="#pswd">Enter password: </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="pswd"
            type="password"
            placeholder="password"
            required
          />
          <button type="submit" id="submit-btn">
            SUBMIT
          </button>
          <p>do not have an account ?</p>
        </form>
        <button
          onClick={() => {
            nav("/signup");
          }}
          id="signup-btn"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Login;

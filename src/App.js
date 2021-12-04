import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import {UserDetailsContext} from './assets/contexts'


function App() {
  const [userInfo , setUserInfo] = useState({
    userName: '',
    description: '',
    uid:null
  })
  return (
    <UserDetailsContext.Provider value={{userInfo,setUserInfo}}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </UserDetailsContext.Provider>
  );
}

export default App;

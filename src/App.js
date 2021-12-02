import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

export const userDetailsContext = createContext(null);

function App() {
  const [score, setScore] = useState(null);
  let uDetails = {
    score,
    setScore
  };
  return (
    <userDetailsContext.Provider value={uDetails}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </userDetailsContext.Provider>
  );
}

export default App;

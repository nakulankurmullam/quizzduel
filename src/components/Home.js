import React, { useState, useContext } from "react";
import Nav from "./Nav";
import "./Home.css";
import Selection from "./Selection";
import Question from "./Question";
import { AuthContext } from "../assets/contexts";
import Login from "./Login";

function Home() {
  const { isOnline } = useContext(AuthContext);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selections, setSelections] = useState({
    difficulty: "",
    category: null,
  });
  return isOnline ? (
    <div className="container">
      <Nav currentlyActive="HOME" />
      {!showQuestion && (
        <Selection
          setShowQuestion={setShowQuestion}
          setSelections={setSelections}
        />
      )}
      {showQuestion && (
        <Question setShowQuestion={setShowQuestion} selections={selections} />
      )}
    </div>
  ):(
      <Login/>
  )
}

export default Home;

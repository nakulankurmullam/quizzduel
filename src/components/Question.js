import React from "react";
import "./Question.css";

function Question() {
  return (
    <div className="container-quest">
      <div className="card-q">
        <div className="question">
          <h1>Some random question?? Lorem ipsum dolor sit amet, consectetur</h1>
        </div>
        <div className="options">
            <span>option 1</span>
            <span>option 2</span>
            <span>option 3</span>
            <span>option 4</span>
        </div>
      </div>
    </div>
  );
}

export default Question;

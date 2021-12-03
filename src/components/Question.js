import React, { useState } from "react";
import "./Question.css";
import { baseUrl } from "../assets/constants";
import useFetch from "../assets/useFetch";
import { parseEntities } from "parse-entities";
import Results from "./Results";
import { randomize } from "../assets/helperFuncs";

function Question({ setShowQuestion , selections }) {
  const [questNum, setQuestNum] = useState(0);
  const [selection, setSelection] = useState([]);
  const {category,difficulty} = selections;
  let url = baseUrl;
  if(category && difficulty) {
    url = `${baseUrl}&category=${selections.category}&difficulty=${selections.difficulty}`;
  }
  let { data, loading } = useFetch(url);
  let randomized = {options:[],correctIndex:null}
  if(data && !loading) {
    if(data.results.length === 0){
      alert('oops , looks like we messed up , unable to fetch questions')
      // nav("/")
    }
    randomized = randomize(data, questNum);
  }
  let {options,correctIndex} = randomized;
  console.log(selections)
  return questNum === 9 ? (
    <Results selection={selection} />
  ) : loading && !data ? ( 
    <div className="container-quest">
      <div className="card-q">
        <div id="question">
          <h1>
            <i className="fas fa-spinner"></i> 
          </h1>
        </div>
        <div className="options">
          <span>
            <i className="fas fa-spinner"></i> 
          </span>
        </div>
        <button id="finish-btn">FINISH</button>
      </div>
    </div>
  ) : (
    <div className="container-quest">
      <div className="card-q">
        <div id="question">
          <h3>
            {data ? parseEntities(data.results[questNum].question) : "..."}
          </h3>
        </div>
        <div className="options">
          {options.map((option, i) => (
            <span
              onClick={() => {
                setSelection([
                  ...selection,
                  {
                    questNum,
                    isCorrect: i === correctIndex,
                  }
                ]);
                setQuestNum(questNum + 1);
              }}
              key={i}
            >
              {parseEntities(option)}
            </span>
          ))}
        </div>
        <button onClick={() => setShowQuestion(false)} id="finish-btn">
          QUIT
        </button>
      </div>
    </div>
  );
}

export default Question;

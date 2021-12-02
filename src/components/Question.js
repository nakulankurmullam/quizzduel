import React, { useState } from "react";
import "./Question.css";
import { baseUrl } from "../utility/constants";
import useFetch from "../utility/useFetch";
import { parseEntities } from "parse-entities";
import Results from "./Results";
import { randomize } from "../utility/helperFuncs";

function Question({ setShowQuestion , selections }) {
  const [questNum, setQuestNum] = useState(0);
  const [selection, setSelection] = useState([]);
  const {category,difficulty} = selections
  let url = baseUrl
  if(category && difficulty) {
    url = `${baseUrl}&category=${selections.category}&difficulty=${selection.difficulty}`
  }
  let { data, loading } = useFetch(url);
  let { options, correctIndex } = randomize(data, questNum);
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
                  },
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

import React, { useContext } from "react";
import {userDetailsContext} from '../App';

//temp high score till firebase integration
let highScore = 0;
function Results({ selection }) {
  let localScore = selection.filter((element) => element.isCorrect).length;
  let {score,setScore} = useContext(userDetailsContext)
  setScore(localScore)
  return score <= highScore ? (
    <div>
      <p>You scored {score}</p>
    </div>
  ) : (
    <div className="highscore">
      <h3>You attained a new high score !!</h3>
      <p>You scored {score}</p>
    </div>
  );
}

export default Results;

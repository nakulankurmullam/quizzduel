import React, { useState } from "react";
import "./Selection.css";

function Selection({ setShowQuestion, setSelections }) {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  //   can be used when multiplayer is intergrated to this project
  //   const [type, setType] = useState(null);
  return (
    <div className="container-sel">
      <div className="card">
        <div id="category" className="dropdown">
          <div className="custom-select">
            <select
              id="category-sel"
              onChange={(e) => setCategory(e.target.value)}
              className="selection"
            >
              <option value={null}>Category</option>
              <option value={9}>General</option>
              <option value={10}>Entertainment : Books</option>
              <option value={11}>Entertainment : Film</option>
              <option value={12}>Entertainment : Music</option>
              <option value={14}>Entertainment : Television</option>
              <option value={15}>Entertainment : Video Games</option>
              <option value={16}>Entertainment : Board Games</option>
              <option value={17}>Science & Nature</option>
              <option value={18}>Science : Computers</option>
              <option value={19}>Science : Mathematics</option>
              <option value={20}>Mythology</option>
              <option value={21}>Sports</option>
              <option value={22}>Geography</option>
              <option value={23}>History</option>
              <option value={24}>Politics</option>
              <option value={26}>Celebrities</option>
              <option value={28}>Animals</option>
              <option value={29}>Vehicles</option>
              <option value={30}>Entertainment : Comics</option>
              <option value={31}>Entertainment : Japenese Anime & Manga</option>
              <option value={32}>Entertainment : Cartoon & Animations</option>
            </select>
          </div>
        </div>
        <div id="difficult" className="dropdown">
          <div className="custom-select">
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setDifficulty(e.target.value);
              }}
              className="selection"
              id="difficulty-sel"
            >
              <option value={null}>Difficulty</option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
        </div>
        <div id="type" className="dropdown">
          <div className="custom-select">
            <select className="selection" id="type-select">
              <option value={1}>single</option>
              <option value={1}>duel (...coming soon :P LOL sorry) </option>
            </select>
          </div>
        </div>
        <button
          onClick={() => {
            if (!difficulty && !category)
              alert("You must select a category and difficulty.");
            else {
              setSelections({
                difficulty,
                category,
              });
              setShowQuestion(true);
            }
          }}
          id="start-btn"
        >
          START!!
        </button>
      </div>
    </div>
  );
}
// function ham(id){
//     let tmp = document.querySelector(`#${id}`);
//     if(tmp.className === "dropdown"){
//         tmp.className += " active";
//     }else{
//         tmp.className = "dropdown";
//     }
// }

export default Selection;

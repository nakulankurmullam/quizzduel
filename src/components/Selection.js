import React from 'react'
import './Selection.css'

function Selection() {
    return (
        <div  className="container-sel">
            <div className="card">
                <div id="category" className="dropdown">
                    <button onClick={()=>{ham("category")}} className="dropbtn">Category</button>
                    <div onClick={()=>{ham("category")}} className="dropcontent">
                        <p>category 1</p>
                        <p>category 2</p>
                        <p>category 3</p>
                        <p>category 4</p>
                    </div>    
                </div>
                <div id="difficult" className="dropdown">
                    <button onClick={()=>{ham("difficult")}} className="dropbtn">Difficulty</button>
                    <div onClick={()=>{ham("difficult")}} className="dropcontent">
                        <p>easy</p>
                        <p>medium</p>
                        <p>hard</p>
                    </div>
                </div>
                <div id="type" className="dropdown">
                    <button onClick={()=>{ham("type")}} className="dropbtn">Type</button>
                    <div onClick={()=>{ham("type")}} className="dropcontent">
                        <p>single</p>
                        <p>duel</p>
                    </div>
                </div>
                <button id="start-btn">START!!</button>
            </div>
        </div>
    )
}

function ham(id){
    let tmp = document.querySelector(`#${id}`);
    if(tmp.className === "dropdown"){
        tmp.className += " active";
    }else{
        tmp.className = "dropdown";
    }
}

export default Selection

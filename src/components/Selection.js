import React from 'react'
import './Selection.css'

function Selection() {
    return (
        <div  className="container-sel">
            <div className="card">
                <div className="dropdown">
                    <button className="dropbtn">Category</button>
                    <div className="dropcontent">
                        <p>category 1</p>
                        <p>category 2</p>
                        <p>category 3</p>
                        <p>category 4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selection

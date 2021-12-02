import React, { useState} from 'react'
import Nav from './Nav'
import './Home.css'
import Selection from './Selection'
import Question from './Question'

function Home() {
    const [showQuestion, setShowQuestion] = useState(false)
    const [selections, setSelections] = useState({
        difficulty:'',
        category:null
    })
    return (
        <div className="container">
            <Nav currentlyActive="HOME"/>
            {!showQuestion && <Selection setShowQuestion={setShowQuestion} setSelections={setSelections} />}
            {showQuestion && <Question setShowQuestion={setShowQuestion} selections={selections} />}
        </div>
    )
}

export default Home

import React, { useState} from 'react'
import Nav from './Nav'
import './Home.css'
import Selection from './Selection'
import Question from './Question'

function Home() {
    const [showQuestion, setShowQuestion] = useState(false)
    return (
        <div className="container blue-grey darken-3">
            <Nav/>
            {!showQuestion && <Selection setShowQuestion={setShowQuestion}/>}
            {showQuestion && <Question/>}
        </div>
    )
}

export default Home

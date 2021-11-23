import React from 'react'
import Nav from './Nav'
import './Home.css'
import Selection from './Selection'

function Home() {
    return (
        <div className="container blue-grey darken-3">
            <Nav/>
            <Selection/>
        </div>
    )
}

export default Home

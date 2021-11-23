import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;

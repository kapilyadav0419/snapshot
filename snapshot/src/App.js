// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import MyComponent from './Mycomponent';
import Header from './Header';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Mountains from './Mountains';
import Beaches from './Beaches';
import Birds from './Birds';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage/>}/> */}
        <Route path="/" element={<Header/>}/>
        <Route path="/Mountain" element={<Mountains/>}/>
        <Route path="/Beaches" element={<Beaches/>}/>
        <Route path="/Birds" element={<Birds/>}/>
        <Route path='/Food' element={<Food/>}></Route>

        {/* <Route path="/postview" element={<PostView/>}/> */}
        <Route/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
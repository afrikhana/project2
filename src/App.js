import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Cart from './Create';

import Gallery from './Gallery';


function NavBar(){
  
  return(
    
    <nav>
      <p><NavLink to="/Home">Home</NavLink></p>
      <p> <NavLink to="/Gallery">Gallery</NavLink></p>
      <p><NavLink to="/Cart">Create</NavLink></p>
      <p><NavLink to="/Login">Login</NavLink></p>
      <p><NavLink to="/LogOut">LogOut</NavLink></p>
      
     
      <div class="animation start-home"></div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/LogOut" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

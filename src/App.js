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
      <a href='/Home'><NavLink to="/Home">Home</NavLink></a>
      <a href='/Gallery'> <NavLink to="/Gallery">Gallery</NavLink></a>
      <a href='/Cart'><NavLink to="/Cart">Create</NavLink></a>
      <a href='/Login'><NavLink to="/Login">Login</NavLink></a>
      <a href='/logOut'><NavLink to="/LogOut">LogOut</NavLink></a>
      
     
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

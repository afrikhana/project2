import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Cart from './Cart';


function NavBar(){
  
  return(
    
    <nav>
      <a><NavLink to="/Home">Home</NavLink></a>
      <a> <NavLink to="/Cart">Cart</NavLink></a>
      <a><NavLink to="/Login">Login</NavLink></a>
     
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
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

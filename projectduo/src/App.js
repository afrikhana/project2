import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import Login from './login';
import Home from './Home';
import Cart from './Cart';


function NavBar(){
  
  return(
    
    <nav>
       <NavLink to="/Home">Home</NavLink>
       <NavLink to="/Cart">Cart</NavLink>
       <NavLink to="/Login">Login</NavLink>

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

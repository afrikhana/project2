import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './login';
import Home from './Home';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';


function NavBar(){
  
  return(
    
    <nav>
       <NavLink to="/Login">Login</NavLink><br></br>
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

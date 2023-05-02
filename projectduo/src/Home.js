import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Cart from './Cart';

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);
   
  function NavBar(){
  
    return(
      
      <nav>
         <NavLink to="/Cart">Cart</NavLink><br></br>
      </nav>
    );
  }
  


  return (
    <div>
      <h1><u>HOME</u></h1>
      <NavBar/>
      <Routes>
        <Route path="/Cart" element={<Cart/>}></Route>
        </Routes>
      {photos.map((Photos) => (
        <div key={Photos.id}>
          <h2>{Photos.title}</h2>
          <img src={Photos.url} alt={Photos.title} />
        </div>
      ))}
    </div>
  );
}

export default Home;

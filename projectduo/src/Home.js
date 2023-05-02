import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Cart from './Cart';
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import UpdatePhoto from "./UpdatePhoto";

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
    fetch("http://localhost:3000/Photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
    }, 1000)
    return () => clearInterval(interval)
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
          <p>Price:{Photos.price}</p>
         <p>Photo Rate:{Photos.bid}</p>
          <img src={Photos.cover} alt={Photos.title} />
          <LikeButton />
        </div>
      ))}
        <UpdatePhoto />
        <DeleteButton />
    </div>
  );
}

export default Home;

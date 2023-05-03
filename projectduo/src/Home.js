import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from './Cart';
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import UpdatePhoto from "./UpdatePhoto";
import SearchButton from "./SearchButton";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query) {
    setSearchQuery(query);
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetch(`http://localhost:3000/Photos?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.log(error));
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  function NavBar() {
    return (
      <nav>
        <NavLink to="/Cart">Cart</NavLink><br></br>
      </nav>
    );
  }

  return (
    <div>
       <Routes>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <h1><u>HOME</u></h1>
      <NavBar />
      <SearchButton onSearch={handleSearch} />
      
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <p>Price: {photo.price}</p>
          <p>Photo Rate: {photo.bid}</p>
          <img src={photo.cover} alt={photo.title} />
          <LikeButton />
        </div>
      ))}
      <UpdatePhoto />
      <DeleteButton />
    </div>
  );
}

export default Home;

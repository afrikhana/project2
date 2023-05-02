import { useState, useEffect } from "react";

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1><u>HOME</u></h1>
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

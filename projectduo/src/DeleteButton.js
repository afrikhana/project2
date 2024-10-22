import { useState, useEffect } from "react";

function DeleteButton() {
  const [setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error(error));
  }, );

  function handleDelete() {
    const id = prompt("Enter the ID of the photo to delete:");
    if (!id) return;

    fetch(`http://localhost:3000/Photos/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          setPhotos((prevPhotos) =>
            prevPhotos.filter((photo) => photo.id !== id)
          );
        } else {
          throw new Error("Failed to delete photo");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      {/* <h1>My Photos</h1> */}
      <button onClick={handleDelete}>Delete Photo</button>
      {/* <div className="photos">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <h2>{photo.title}</h2>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default DeleteButton;

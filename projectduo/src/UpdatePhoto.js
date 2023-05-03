import React, { useState } from "react";

function UpdateButton({ Photos, setPhotos }) {
  const [updatedPhoto, setUpdatedPhoto] = useState({
    id: "",
    title: "",
    price: "",
    cover: ""
  });

  function handleUpdate() {
    // find the index of the photo to update
    const index = Photos.findIndex(
      (photo) => photo.id === updatedPhoto.id
    );

    // update the photo in the array
    if (index >= 0) {
      const updatedPhotos = [...Photos];
      updatedPhotos[index] = updatedPhoto;
      setPhotos(updatedPhotos);
    } else {
      alert("Photo not found!");
    }
  }

  return (
    <div>
      <h2>Update Photo</h2>
      <div>
        <label htmlFor="id">ID: </label>
        <input
          type="text"
          id="id"
          value={updatedPhoto.id}
          onChange={(e) =>
            setUpdatedPhoto({ ...updatedPhoto, id: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={updatedPhoto.title}
          onChange={(e) =>
            setUpdatedPhoto({ ...updatedPhoto, title: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          id="price"
          value={updatedPhoto.price}
          onChange={(e) =>
            setUpdatedPhoto({ ...updatedPhoto, price: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="cover">Cover: </label>
        <input
          type="text"
          id="cover"
          value={updatedPhoto.cover}
          onChange={(e) =>
            setUpdatedPhoto({ ...updatedPhoto, cover: e.target.value })
          }
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
      {Photos &&
        Photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.cover} alt={photo.name} />
            <p>{photo.title}</p>
            <p>{photo.price}</p>
          </div>
        ))}
    </div>
  );
}

export default UpdateButton;

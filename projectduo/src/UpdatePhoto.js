import React, { useState } from "react";

function UpdateButton() {
    // get the input values
    const updatedPhoto = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      cover: document.getElementById("cover").value,
    };
  
    // find the index of the photo to update
    const index = Photos.findIndex((Photos) => Photos.id === updatedPhoto.id);
  
    // update the photo in the array
    if (index >= 0) {
      const updatedPhotos = [...Photos];
      updatedPhotos[index] = updatedPhoto;
      setPhotos(updatedPhotos);
    } else {
      alert("Photo not found!");
    }
  
  
  return (
    <div>
      <h2>Update Photo</h2>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input type="text" id="price" />
      </div>
      <div>
        <label htmlFor="cover">Cover: </label>
        <input type="text" id="cover" />
      </div>
      <button onClick={handleUpdate}>Update</button>
      {photos && photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.cover} alt={photo.name} />
          <h3>{photo.name}</h3>
          <p>{photo.title}</p>
          <p>{photo.price}</p>
        </div>
      ))}
    </div>
  );
      }

export default UpdateButton;

import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

function Cart() {


  //   if (!isLoggedIn) return <Redirect to="/Login" />;
function FetchData(){
  const [Photos, setDisplay]= useState([]);
  
  useEffect(()=>{
   fetch('http://localhost:3000/Photos')
   .then(res=>res.json())
   .then(data=>
    setDisplay(data))
  },[])

 

  return (
    <div class="display">
      
      {Photos.map(photo =>(
        <div className="content" key={photo.id}>
          <img src={photo.cover} alt={photo.id}></img>
          <h1>{photo.title}</h1>
          <p>Price:{photo.price}</p>
           <DeleteButton/>
        </div>
      ))}
    </div>
  );

}









//return for App
return (
  <div className="App" class="display">
    
   
 
 

{/* intro qip */}
<div class="vibes">
  <h1>Vibes</h1>
  <p>Its all about the vibes broski, dont take it eezy take it hard papi <br></br>
      Se trata de las vibraciones broski, no lo tomes eezy tómalo duro papi</p>
 </div>
   
   <FetchData />
  
  </div>
);

}

export default Cart;

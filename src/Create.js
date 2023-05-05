import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./cart.css"

function Cart() {
  const[createData, setCreateData]=useState({
    id:'',
    cover:'',
    title:'',
    price:'',
    upload: '',
    delete: "Deleted",
    like: 0

  })
  function handleChange(e){
    setCreateData({
        ...createData,[e.target.name]:e.target.value,
    });
  }
 
  function handleClick(e){
    e.preventDefault();
    fetch(`http://localhost:3000/Photos`,{
        method:'POST', headers:{'Content-Type':'application/json',},
        body:JSON.stringify(createData),
    })
    .then((r)=>r.json())
    .then(user=>console.log(user))
  }
  return (
    <div className="createForm">
   
<form id="form" >
    <div className="card1">
      <div className="textInputWrapper">
      <input className="textInput" type="number" placeholder="id" name="id"
    value={createData.id} onChange={handleChange}></input>        
      <i></i>

    <input className="textInput" src="text" placeholder="cover" name="cover"
    value={createData.cover} onChange={handleChange}></input>
      <i></i>

    <input className="textInput" type="text" placeholder="title" name="title"
    value={createData.title} onChange={handleChange}></input>      
    <i></i>
    <input className="textInput" type="number" placeholder="price" name="price"
    value={createData.price} onChange={handleChange}></input>      
    <i></i>

      </div>
      {/* start button */}
      <button type="submit"  data-label="Register" class="button" onClick={handleClick}>
   
      <span class="actual-text">&nbsp;submit&nbsp;</span>
      <NavLink to="/Gallery"> <span class="hover-text" aria-hidden="true">&nbsp;Submit&nbsp;</span></NavLink>
    
    </button>
  </div>
    
    
</form>




  
    

</div>
  );
}

export default Cart;
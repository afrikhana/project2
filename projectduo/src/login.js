import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function Login({onLogin}){
    // const history=useHistory()
 const [formData,setFormData]=useState({
    email:'',
    username:'',
    password:'',   
 })
 function handleChange(e){
    setFormData({
        ...formData,[e.targe.name]:e.tartget.value,
    });
 }
 function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/Login",{
         method:"POST", headers:{"Content-Type":"application/json",},
         body:JSON.stringify(formData),
    })
    .then((r)=>r.json())
    .then((user)=>{onLogin(user);

    //  history.push("/Home");
    })
 }

return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" 
        value={formData.email} onChange={handleChange}></input>

        <input type="text" placeholder="username" 
        value={formData.username} onChange={handleChange}></input>

        <input type="number" placeholder="password" 
        value={formData.password} onChange={handleChange}></input>

        <button type="submit">Login</button>
    </form>
);

}


export default Login
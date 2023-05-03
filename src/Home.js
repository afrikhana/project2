import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes ,NavLink} from "react-router-dom";
import './home.css'

// import { Redirect } from "react-router-dom";

function Home() {
 
 


  return (
    <div className="home">
      <div className="text">
      <h1>The Nomads Workshop<span>
        </span>
        <h6>Welcome to the journey</h6></h1>
        {/* button */}
        <button className="btn1">
        <span></span>
                     <span></span>
                     <span></span>
         <span></span>
          <NavLink to="/Login">
          <p>try me:p</p></NavLink></button>
      </div>
        {/* content 1 */}
        <div className="content1">
               <h1>Hght quality for the Nomad
                <span></span> 
                <p>For the love of you, be truthful and 
                loving to the quality</p> 
               </h1>
               <div className="img1"><img src="https://www.astria.ai/assets/high-quality-finetuning-c8fb3bb94bd3196864da41562c6d23e56a2bfdadf8e74daf9ac9258f3e0a4b49.jpg"></img></div>
        </div>

        {/* content 2 */}
        <div className="content2">
        <img src="https://sdbooth2-production.s3.amazonaws.com/m4yril7kxzgor3t4febhb87hasqh"></img>
         <h1>It's All about the Details<span></span>
         <p>come on now...join us on this journey</p></h1>
         <NavLink to="/Cart"><button className="cta">
         <span>lets goooooo</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button></NavLink>
        </div>
    </div>
  );
}

export default Home;

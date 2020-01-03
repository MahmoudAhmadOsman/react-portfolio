import React from 'react';
import{Link, NavLink} from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  return(
   
  
     <div className="topnav" id="myTopnav">
      <ul>
    <NavLink to="/">Home</NavLink>
     <NavLink to="/about">About</NavLink>
     <NavLink to="/contact">Conact</NavLink>
  
   <a  class="icon" onClick={myFunction}>
    <i class="fa fa-bars"></i>
  </a>
     
  </ul>





  </div>

  



  );
 
};


    



export default Navigation;
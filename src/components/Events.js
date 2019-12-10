import React, { Component } from 'react';
class Events extends Component {
  
  // Now define the function
  activateAlert (){
   //console.log("Alert Activated!");
   alert("Alert Activated!");
 }
  render() {
    return (
      <div className="container"> <br />
    <div className="row">
<div className="col-lg-6">
  <h1 className="text-warning ev">React Events </h1> 
<button className="btn btn-warning" onClick={this.activateAlert}><h3>Activate Alert</h3></button>


</div>

<div className="col-lg-6">
<h1 className="text-warning ev">Right Section </h1> 
<p className="right_sec">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
</p>
</div>

  </div>




    <style jsx>{`
    h1.ev{
      text-align:center;
    }

        .btn-warning{
          height: 52px;
          background-color:#d4c32b;
          border-color: #d4c32b;
          font-weight:bold;
        }
        .right_sec{
          color:#666;
        }
        .right_sec:hover{
            color:#000;
        }
    `
    }
    </style>
  </div>
  


    );
  }
}

export default Events;

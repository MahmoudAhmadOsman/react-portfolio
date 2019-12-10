import React, { Component } from 'react';
class Education extends Component {


//React State
//Step 1; create constructor that excepts props as an argument
constructor(props){

  //Step 2

  super(props);

  // Now you have an access to the built-in state object
  // State object can have or contain more than one property


//Now create State object. it's similar to JSON, but use [this] keyword
this.state = {
  SchoolName: "Champlain College",
  EducationLevel: "Bachelor's Degree",
  FieldStudied: "Comptuter Science",
  GratuatedYear: 2019

}

}

// you can change the state object if you like using arrow function like this
changeSchoolName = () => {
    this.setState({
        SchoolName: "UVM"
      });
  }

  render() {
    return (
      <div className="container education">
     <div className="row">
<div className="col-md-6"> 
<h2 className="text-danger fa fa-graduation-cap ed"> School & Education</h2><hr />
        <p><b>College Name:</b> {this.state.SchoolName}</p>
        <p><b>Degree:</b> {this.state.EducationLevel}</p>
        <p><b>Field Studied:</b> {this.state.FieldStudied}</p>
        <p><b>Year graduated:</b> <span className="text-primary">{this.state.GratuatedYear}</span></p>
          
</div>
<div className="col-md-6">
<h3 className="text-danger">React State</h3> <hr />
<p className="text-primary">This is how you display or render React [STATE] using React Component class.</p>
</div>


     </div>
        

      </div>
    );
  }
}

export default Education;

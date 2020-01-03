import React, { Component } from 'react';

class WelcomeAlert extends Component {

state ={
    fname: "Mahmoud ",
    lname: "Osman"
};

//intial render - the constructor will render or will be executed first
    constructor(props){
        super(props);

        //this.state.fname;

        console.log("constructor is called first");
    }

componentDidMount() {
    console.log("component did mount");
    //alert("component did mount");
  
}


//component will mount

componentWillMount(){
    console.log("componentWillMount")
}

render(){
    return (
       

<div class="alert alert-success alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
        <p>State <code> constructor () </code> Values Are Printed here!</p>
        <ul>
            <li>{this.state.fname}</li>
            <li>{this.state.lname}</li>
        </ul>
        
</div>
    );
}

}

export default WelcomeAlert;
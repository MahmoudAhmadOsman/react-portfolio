import React, { Component } from 'react';
class NavBar extends Component {
  render() {
    return (
      <div className="main_navigation">
 <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">My React App</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#t">Contact</a></li>
            
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Sigin</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default NavBar;

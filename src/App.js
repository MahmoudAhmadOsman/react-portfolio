import React, { Component } from 'react';
import './App.css';
//import NavBar from './components/NavBar';
// import Note from './components/Note';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';
import Events from './components/Events';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

import {BrowserRouter, Route } from 'react-router-dom';

 



class App extends Component {
  render() {
    return (

    
      <div className="main_app">

        <BrowserRouter>
          <div className="main_navigation">
              <Navigation />
              <Route exact path="/" component ={Home} />
              <Route  path="/about" component ={About} />
              <Route  path="/contact" component ={Contact} />
        </div>
        </BrowserRouter>
      

          <div classNamae="container-fluid">
                {/* <NavBar /> */}
                {/* <Note /> */}

            
          </div>




        <div className="my_intro">
                {/* <Intro /> */}
        </div>
       
        {/* <Contact /> */}

      {/* <Skills 
          skill1="HTML5" 
          skill2="CSS3" 
          skill3="PHP"
          skill4="JavaScript"
          skill5="jQuery"
          skill6="Java"
          skill8="Laravel"
          skill7="and more..."

          >          
      </Skills>
 */}

    
    {/* <Education /> */}
    {/* <Events /> */}
    <Footer />

</div>
    );
  }
}

export default App;

import React from 'react';
import './Contact.css';
import './WelcomeAlert';
import WelcomeAlert from './WelcomeAlert';

const Contact = () => {

    

  return(
     <div className="container" id="contact__me">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h1>Contact Me</h1><hr />
                  
                    {/* <img src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png" class="img-responsive" alt="Mahmoud Osman" /> */}
                    <img src="http://netsansoftware.com/images/mahmoud.jpg" alt="Mahmoud Osman" />

                    <caption className="text-center show__details mr">Mr. Mahmoud Osman</caption>
                    
                    <p className="display_details">
                    Please, contact me via my email address OR call me at my cell phone. I am looking forward to talking to you soon!.
Thank You.
                    </p>
                </div>
                <div className="col-md-7">
                    <h1>Send an Email</h1><hr />
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i> <b>Email me to:</b> example@gmail.com</p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i> <b> Call me at:</b> 802-644-6654</p> <hr />

                    <h1>Follow me on</h1>
                    <ul className="list-unstyled social__media">
                        <li> <a href="#"><i class="fa fa-facebook " aria-hidden="true"></i> Facebook</a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                        <li><a href="#"><i class="fa fa-git" aria-hidden="true"></i> Github</a></li>

<li><a href="www.netsansoftware.com" target="_blank"><i class="fa fa-star-o" aria-hidden="true"></i> Visit</a></li>                    </ul>
                   
                   
                  





                 

                

                </div>

                
            </div>
        </div>


        <WelcomeAlert />
  </div>
  );
 
};



export default Contact;
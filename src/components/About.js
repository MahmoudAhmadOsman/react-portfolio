import React from 'react';
import './About.css';
const About = () => {

  const abouStyle = {
    color:"#888"
  };

return(
  <section className="about">
<div className="container">
<div className="card">
<img src="http://netsansoftware.com/images/mahmoud.jpg" alt="Mahmoud Osman" />
    <div className="card-body">
      <h4 className="card-title" style={abouStyle}>Mahmoud Osman</h4>
      <div className="card-text" style={abouStyle}>
      <p>Mahmoud Osman is an entrepreneur, software/web designer and developer.
          He studied at Champlain College, and he has a bachelor's degree of computer science specialized in Web Design and Development.</p>

          <p>On the other side, he has an associate degree of Computer Systems Management from Community College of Vermont. Additionally, he also has three additional web certificates, a web design, web programming, and php programming.</p>

          <p>Moreover, he is a new starter and an entrepreneur of web design and development business and uses modern web technologies. He is devoted to modern technologies and he is into the ever changing web technologies and designs where he believes that web technology can make a change.</p>

          <p>Indeed, he is a web programmer and uses multiple web programming technologies such as HTML5, CSS3, JavaScript, Bootstrap, PHP, Sass, and JQuery. Also, he uses other Content Management Systems or CMS technologies such as Drupal and WordPress and builds with responsive and database driven applications.</p>
      </div>
      
    </div>
  </div>





</div>
</section>
    );

};


export default About;
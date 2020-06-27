import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home__page">
      <div className="container">
        <div className="jumbotron">
          <h2>
            React Demo Application<sup>&reg;</sup>
          </h2>
          <p>
            This is a demo application that I am currenlty building with{" "}
            <b>React JS</b>.
          </p>
          <small className="text-danger">
            Please, check back again. Thank you. ___ Best.{" "}
            <a href="http://netsansoftware.com/#skills" target="\_blank">
              Mahmoud Osman
            </a>
            .
          </small>
        </div>
      </div>
    </section>
  );
};

export default Home;

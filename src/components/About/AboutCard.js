import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Arif bin Mat Daud </span>
            from <span className="purple"> Ipoh, Perak</span>
            <br />
            I'm currently a final year software engineering student at Universiti Kebangsaan Malaysia.
            Throughout my academic journey, I have been exposed to a wide range of software engineering concepts and have gained 
            practical experience through various projects and coursework
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography & Videography
            </li>           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do it until you make it"{" "}
          </p>
          <footer className="blockquote-footer">Arif Daud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

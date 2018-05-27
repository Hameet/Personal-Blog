import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { View, Mask, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <div>
          <div className="bio-container">
        <Image src="assets/koyal.jpg" className="image"/>
        <Row className="text pulled left">
          <Col xs={1} sm={5} className="person-wrapper">
          
          <Image src="assets/person-1.jpeg" circle className="profile-pic"/>
          <h1>About me</h1>
          <p>Hi, I'm Hameet, aspiring developer. Interested in art, design, traveling, film, music, coding and conversations. Have a look at some of my work.</p>
          
          <h2>Full Stack Devloper, &nbsp; 
          Check out my <a href="https://github.com/Hameet">Github</a> and  <a href="https://www.linkedin.com/in/hameet-boparai-79951827/">LinkedIn</a></h2>
          
          </Col>
          
        </Row>
        </div>

        <div className="skill-container">

        <Row>
          <h5 className="text-center">Skills and Abilities</h5>
        <Col xs={4} sm={6} className="content">
         
          <h4>HTML(5)</h4>
          <h4>CSS(3)</h4>        
          <h4>Bootstrap Framework</h4>
          <h4>Git</h4>
          <h4>Command Line</h4>
          <h4>Javascript</h4>
          <h4>React</h4>
          <h4>Redux</h4>
          <h4>Agile Software Development</h4>
          <h4>Object Oriented Programming</h4>
          <h4>SEO</h4>
          <h4>SQL</h4>
          <h4>Express Server</h4>
          <h4>SASS/SCSS</h4>
            
        </Col>

        <Col xs={4} sm={6} className="bars">
        <div>
          <ProgressBar  bsStyle="success" now={90}/>
          <ProgressBar  bsStyle="success" now={90}/>
          <ProgressBar  bsStyle="info" now={70}/>
          <ProgressBar  bsStyle="success" now={80}/>
          <ProgressBar  bsStyle="success" now={70}/>
          <ProgressBar  bsStyle="warning" now={60}/>
          <ProgressBar  bsStyle="success" now={70}/>
          <ProgressBar  bsStyle="info" now={60}/>
          <ProgressBar  bsStyle="success" now={80}/>
          <ProgressBar  bsStyle="warning" now={70}/>
          <ProgressBar  bsStyle="danger" now={40}/>
          <ProgressBar  bsStyle="info" now={70}/>
          <ProgressBar  bsStyle="success" now={80}/>
          <ProgressBar  bsStyle="danger" now={60}/>
          
        </div>

        </Col>

      </Row>
      </div>

      <div className="bottom-content">
      <h6>Projects</h6>
      <Row>
      <Col md={3} mdOffset={2} className="projects">
        <div className="container">
        
        <Image src="assets/blue.png" className="image-project"/>
          <div className="overlay">
          <a href="http://embracing-blue.herokuapp.com/#/"><span className="glyphicon glyphicon-new-window"></span></a>
          <strong><h7>Final EDA Project, a webapp created for addresing mental health issues</h7></strong>
          <div className="line"></div>
          <strong><h8>Tags: SQL, Bulma, Redux, React & Auth</h8></strong>
          
          </div>
        </div>
        </Col>
        <Col md={3} mdOffset={0} className="projects">
        <div className="container-two">
        <Image src="assets/lost.png" className="image-project"/>
        <div className="overlay-two">
        <a href="http://lostfoundpets.herokuapp.com/#/"><span className="glyphicon glyphicon-new-window"></span></a>
          <strong><h7>Another intense EDA Project created in a 2 day hackathon</h7></strong>
          <div className="line"></div>
          <strong><h8>Tags: SQL, Bulma, Redux, React & Auth</h8></strong>
          </div>
        </div>
        </Col>
        <Col md={3} mdOffset={0} className="projects">
        <div className="container-three">
        <Image src="assets/sunny.png" className="image-project"/>
        <div className="overlay-three">
          <strong><h7>Live weather API and responsive animation</h7></strong>
          <a href="https://live-weather-report.herokuapp.com/"><span className="glyphicon glyphicon-new-window"></span></a>
          <div className="line"></div>
          <strong><h8>Under Construction</h8></strong>
        </div>
        </div>
        </Col>
      </Row>
    </div>

        </div>
    
    )
  }
}

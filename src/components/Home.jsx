import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <div>
          <div className="bio-container">
        
        <Image src="assets/koyal.jpg" className="image"/>
        
        <Row >
          <div className="person-wrapper">
          <Col xs={6} sm={3} md={6} mdOffset={3}>
                  
          <Image src="assets/person-1.jpeg" circle className="float-left"/>
          <p>Hi, I'm Hameet, aspiring developer. Interested in art, design, traveling, film, music, coding and conversations. Have a look at some of my work.</p> 
          </Col>
          </div>
        </Row>
        
        </div>

        <div className="skill-container">
        <Grid>
        <Row>
          
        <Col sm={4} md={6} mdOffset={2} className="bars">
        <div>
        <h2>Skills and Abilities</h2>
          <ProgressBar  bsStyle="success" now={90} label={<h3>HTML5</h3>}/>
          <ProgressBar  bsStyle="success" now={90} label={<h3>CSS(3)</h3>}/>
          <ProgressBar  bsStyle="info" now={70} label={<h3>Bootstrap Framework</h3>}/>
          <ProgressBar  bsStyle="success" now={80} label={<h3>Git</h3>}/>
          <ProgressBar  bsStyle="success" now={70} label={<h3>Command Line</h3>}/>
          <ProgressBar  bsStyle="warning" now={60} label={<h3>Javascript</h3>}/>
          <ProgressBar  bsStyle="success" now={70} label={<h3>React</h3>}/>
          <ProgressBar  bsStyle="info" now={60} label={<h3>Redux</h3>}/>
          <ProgressBar  bsStyle="success" now={80} label={<h3>Agile Software Development</h3>}/>
          <ProgressBar  bsStyle="warning" now={70} label={<h3>Object Oriented Programming</h3>}/>
          <ProgressBar  bsStyle="danger" now={40} label={<h3>SEO</h3>}/>
          <ProgressBar  bsStyle="info" now={70} label={<h3>SQL</h3>}/>
          <ProgressBar  bsStyle="success" now={80} label={<h3>Express Server</h3>}/>
          <ProgressBar  bsStyle="danger" now={60} label={<h3>SASS/SCSS</h3>}/>
          
        </div>

        </Col>

      </Row>
      </Grid>
      </div>

      <div className="bottom-content">
      <h4>Projects</h4>
      <Row>
      <Col md={3} mdOffset={2} className="projects">
        <div className="container">
        
        <Image src="assets/blue.png" className="image-project"/>
          <div className="overlay">
          <a href="http://embracing-blue.herokuapp.com/#/" target="_blank"><span className="glyphicon glyphicon-new-window"></span></a>
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
        <a href="http://lostfoundpets.herokuapp.com/#/" target="_blank"><span className="glyphicon glyphicon-new-window"></span></a>
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
          <a href="https://live-weather-report.herokuapp.com/" target="_blank"><span className="glyphicon glyphicon-new-window"></span></a>
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

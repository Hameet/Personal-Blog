import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <div>
        <Image src="assets/giphy.gif" className="image"/>
        <Row className="text pulled left">
          <Col xs={1} sm={5} className="person-wrapper">
          
          <Image src="assets/person-1.jpeg" circle className="profile-pic"/>
          <h1>About me</h1>
          <p>Hi, I'm Hameet, aspiring developer. Interested in art, design, traveling, film, music, coding and conversations. Have a look at some of my work.</p>
          
          <h2>Hameet Singh, &nbsp; 
          Check out my <a href="https://github.com/Hameet">Github</a> and  <a href="https://www.linkedin.com/in/hameet-boparai-79951827/">LinkedIn</a></h2>
          
          </Col>
          
        </Row>
        </div>
    
    )
  }
}

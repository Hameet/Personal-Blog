import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>

        <Grid>

          <Row className="background">
            <h1>Some of my Phase-0 projects I made in my early days of coding</h1>
          </Row>

          <Row>
            <Col xs={6} md={9} mdPull={2} className="main-section">
              <Image src="assets/circles.gif" className="circles" />
              <div class="animation">
                <a className="project-link" href="https://hameet.github.io/sprint%209/index.html"><h9>A small animation I made with some Daft Punk playing in the background</h9></a>
              </div>
            </Col>
          </Row>

          <Row>

          <Col md={3} mdOffset={1} className="game-container">
            <div className="calc-container">
              <Image src="assets/calculator.gif" className="calc" />
                <div className="calculator">
                  <a className="project-link" href="https://hameet.github.io/js-calculator/"><h11>Need some help calculating your Finances</h11></a>
                </div>
            </div>
          </Col>

          <Col md={3} mdOffset={3}>
            <div className="bomb-container">
              <Image src="assets/minesweeper.gif" className="bomb" />
                <div className="mine">
                  <a className="project-link" href="https://hameet.github.io/minesweeper/"><h10>IGN gave it 10/10</h10></a>
                </div>
            </div>
          </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}

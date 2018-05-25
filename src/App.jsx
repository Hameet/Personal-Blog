import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    items: Array.from({ length: 20 }),
    hasMore: true
    
  }
  this.fetchData = this.fetchData.bind(this)
}

  fetchData () {
    if(this.state.items.length >= 100) {
      this.setState({hasMore: false})
      return
    }
  

  setTimeout(() => {
    this.setState({
      items: this.state.items.concat(Array.from({length:20}))
    })    
  }, 100)
}
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <InfiniteScroll
  dataLength={this.state.items.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.hasMore}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
    <div>
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
          <ProgressBar bsStyle="success" now={90}/>
          <ProgressBar bsStyle="success" now={90}/>
          <ProgressBar bsStyle="info" now={70}/>
          <ProgressBar bsStyle="success" now={80}/>
          <ProgressBar bsStyle="success" now={70}/>
          <ProgressBar bsStyle="warning" now={60}/>
          <ProgressBar bsStyle="success" now={70}/>
          <ProgressBar bsStyle="secondary" now={60}/>
          <ProgressBar bsStyle="success" now={80}/>
          <ProgressBar bsStyle="warning" now={70}/>
          <ProgressBar bsStyle="danger" now={40}/>
          <ProgressBar bsStyle="info" now={70}/>
          <ProgressBar bsStyle="success" now={80}/>
          <ProgressBar bsStyle="danger" now={50}/>
          
        </div>

        </Col>

      </Row>
    </div>
</InfiniteScroll>
        </div>
      </Router>
    );
  }
}

export default App;

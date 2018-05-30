import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import LeModal from './components/LeModal'

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
          {/* <InfiniteScroll
  dataLength={this.state.items.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.hasMore}
  endMessage={
    <p style={{textAlign: 'center'}}>
      
    </p>
  }> */}
  <div className="footer">
  <Route exact path="/" component={LeModal} />
  
    </div>

    
    
{/* </InfiniteScroll> */}

        </div>
      </Router>
    );
  }
}

export default App;

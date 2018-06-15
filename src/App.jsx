import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import LeModal from './components/LeModal'

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
   
          <div className="footer">
          <Route exact path="/" component={LeModal} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

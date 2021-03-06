import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import LeModal from './components/LeModal'
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/blog" component={Blog}/>
   
          <div className="footer">
          <Route exact path="/" component={LeModal} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

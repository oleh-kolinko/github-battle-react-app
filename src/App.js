import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popular from './components/popular'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './components/nav';
import Home from './components/home';
import Battle from './components/battle';

class App extends Component {
  render() {

    return (
      <div>

        <Router className="App">
          <div className='container'>
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/battle' component={Battle}/>
            <Route path='/popular' component={Popular}/>
          </div>

        </Router>

      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
 
import home from './home.component';
import contact from './contact.component';
import about from './about.component';
 
class App extends Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>
              <a class="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li><NavLink exact activeClassName="active" to={'/'}>Home</NavLink></li>
                <li><NavLink activeClassName="active" to={'/about'}>About</NavLink></li>
                <li><NavLink activeClassName="active" to={'/contact'}>Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
            <Route exact path='/' component={ home } />
            <Route path='/about' component={ about } />
            <Route path='/contact' component={ contact } />
        </Switch>
      </Router>
    );
  }
}

export default App;

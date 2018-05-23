import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage'
import Navbar from './components/Navbar';




class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navbar />
            
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignUpPage} />
            </Switch>
            
          </div>
      </Router>
    );
  }
}

export default App;

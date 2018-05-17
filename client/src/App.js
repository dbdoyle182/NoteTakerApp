import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;

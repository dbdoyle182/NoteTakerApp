import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Navbar from './components/Navbar';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-845805.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaf3yyjd25z2Coa90h7'
}


class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <div>
            <Navbar />
            
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </Switch>
            
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;

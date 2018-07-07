import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../imports/ui/App.js';
import { LoginPage } from '../imports/ui/components/LoginPage';

Meteor.startup(() => {
  render(
  <Router>
    <div>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/' component={App}/>
      </Switch>
    </div>
  </Router>
  , document.getElementById('render-target'));
});
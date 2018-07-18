import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import { LoginPage } from './components/Pages/LoginPage';
import Admin from './components/Pages/Admin/Admin';

const data = {
  days: ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'],
  section: ['iOS', 'android', 'frontend', 'backend'],
  rank: ['Manager', 'Senior', 'Junior', 'Intern'],
  status: ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave']
};

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route exact path="/" render={() => <App {...data} />} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" render={() => <Admin {...data} />} />
      </Switch>
    </Router>,
    document.getElementById('render-target')
  );
});

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginPage } from './components/Pages/LoginPage';
import App from './App';

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={App} />
      </Switch>
    </Router>,
    document.getElementById('render-target')
  );
});

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import { LoginPage } from './components/Pages/LoginPage';
import Admin from './components/Pages/Admin/Admin';

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>,
    document.getElementById('render-target')
  );
});

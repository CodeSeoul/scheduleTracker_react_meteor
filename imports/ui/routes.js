import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import App from './App';
import { LoginPage } from './components/Pages/LoginPage';
import Admin from './components/Pages/Admin/Admin';

const data = {
  days: ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'],
  section: ['iOS', 'android', 'frontend', 'backend'],
  rank: ['Manager', 'Senior', 'Junior', 'Intern'],
  status: ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave']
};
const AuthRoute = ({ component: Component, ...rest }) => {
  if (Meteor.userId()) {
    return <Route component={Component} {...rest} />;
  } else {
    return <Redirect to={'/login'} />;
  }
};

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route exact path="/" render={() => <App {...data} />} />
        <Route path="/login" component={LoginPage} />
        <AuthRoute
          path="/admin"
          render={() => <Admin section={data.section} rank={data.rank} />}
        />
      </Switch>
    </Router>,
    document.getElementById('render-target')
  );
});

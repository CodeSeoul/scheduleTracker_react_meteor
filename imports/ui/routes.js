import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import { LoginPage } from './components/Pages/LoginPage';
import Admin from './components/Pages/Admin/Admin';

const AuthRoute = ({component: Component, ...rest}) => {
  if(Meteor.userId()) {
    return (
      <Route component={Component} {...rest}>
      </Route>
    )
  }
  else {
    return (
      <Redirect to={'/login'}/>
    )
  }
}

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <AuthRoute exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <AuthRoute path="/admin" component={Admin} />
      </Switch>
    </Router>,
    document.getElementById('render-target')
  );
});

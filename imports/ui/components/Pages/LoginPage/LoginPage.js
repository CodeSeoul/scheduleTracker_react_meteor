import React from 'react';
import PolyBackground from '../../PolyBackground';
import { Redirect } from 'react-router';
import Login from './LoginForm';
import LoginForm from './LoginForm';
const LoginPage = () => {
  const redirectUser = Meteor.userId() ? <Redirect to="/" /> : null;
  return (
    <div>
      {redirectUser}
      <PolyBackground />
      This is a login page.
      <LoginForm />
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { Redirect } from 'react-router';
import Login from './LoginForm';
import LoginForm from './LoginForm';
const LoginPage = () => {
  const redirectUser = Meteor.userId() ? <Redirect to="/" /> : null;
  return (
    <div>
          Schedule Tracker
        <LoginForm />
      {redirectUser}
      
    </div>
  );
};

export default LoginPage;

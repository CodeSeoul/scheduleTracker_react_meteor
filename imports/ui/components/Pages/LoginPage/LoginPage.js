import React from 'react';
import { Redirect } from 'react-router';
import Login from './LoginForm';
import LoginForm from './LoginForm';
import { LoginPageBackground } from '../../../styles/LoginPageStyle';

const LoginPage = () => {
  const redirectUser = Meteor.userId() ? <Redirect to="/" /> : null;
  return (
    <div>
      <LoginPageBackground>
          Schedule Tracker
        <LoginForm />
        {redirectUser}
      </LoginPageBackground>
    </div>
  );
};

export default LoginPage;

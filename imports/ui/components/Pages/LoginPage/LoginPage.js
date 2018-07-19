import React from 'react';
import Login from './LoginForm';
import LoginForm from './LoginForm';
import {
  LoginPageBackground,
  LoginPageTitle
} from '../../../styles/LoginPageStyle';

const LoginPage = () => {
  return (
    <div>
      <LoginPageBackground>
        <LoginPageTitle>Schedule Tracker</LoginPageTitle>
        <LoginForm />
      </LoginPageBackground>
    </div>
  );
};

export default LoginPage;

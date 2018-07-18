import React from 'react';
import { LoginFormRoot, LoginFormContainer, LoginInputContainer, LoginInput, LoginSubmitButton } from '../../../styles/LoginFormStyle';

class LoginForm extends React.Component {
  state = {
    errors: [],
    username: '',
    hasError: false
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      username: e.target.value
    });
  };
  login = e => {
    let errors = [];
    this.setState({
      errors: []
    });
    e.preventDefault();
    Meteor.loginWithPassword(
      this.state.username,
      this.password.value,
      error => {
        if (!error) {
          this.setState({
            errors: [],
            hasError: false
          });
        } else {
          this.setState({
            errors: [...this.state.errors, error],
            hasError: true
          });
        }
      }
    );
  };

  errorHandler = errors => {
    return errors.map((error, i) => <p key={i}>{error.message}</p>);
  };

  render() {
    //console.log('this.props', this.props);
    let showErrors = this.state.hasError
      ? this.errorHandler(this.state.errors)
      : null;
    return (
      <LoginFormRoot>
        <LoginFormContainer>
          <LoginInputContainer>
            {showErrors}
          </LoginInputContainer>
          <LoginInputContainer>
            <LoginInput
              type="text"
              placeholder="Your Username"
              name="username"
              onChange={e => this.onChangeHandler(e)}
              value={this.state.username}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <LoginInput
              type="password"
              placeholder="Password"
              innerRef={input => (this.password = input)}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <LoginSubmitButton onClick={this.login}>Login </LoginSubmitButton>
          </LoginInputContainer>
        </LoginFormContainer>
      </LoginFormRoot>
    );
  }
}

export default LoginForm;

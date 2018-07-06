import React from 'react';

class LoginModal extends React.Component {
  state = {
    errors: [],
    loginName: '',
    hasError: false
  };

  login = e => {
    e.preventDefault();
    e.stopPropagation();
    Meteor.loginWithPassword(
      this.state.loginName,
      this.password.value,
      error => {
        if (error) {
          console.log('login error:', error);
        }
      }
    );
  };
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Your Username"
              onChange={e => {
                let name = e.target.value;
                this.setState({
                  loginName: name
                });
              }}
              ref={input => (this.username = input)}
              value={this.state.loginName}
            />{' '}
          </div>{' '}
          <div>
            <input
              type="password"
              placeholder="Password"
              ref={input => (this.password = input)}
            />{' '}
          </div>{' '}
          <button>Login </button>{' '}
        </form>
      </div>
    );
  }
}

export default LoginModal;

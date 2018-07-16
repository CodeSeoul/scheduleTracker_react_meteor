import React from 'react';

class LoginModal extends React.Component {
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
    e.preventDefault();
    e.stopPropagation();
    Meteor.loginWithPassword(
      this.state.username,
      this.password.value,
      error => {
        if (error) {
          console.log('login error:', error);
        }
      }
    );
    this.props.toggleModalHandler();
  };
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>Log In</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Your Username"
              name="username"
              onChange={e => this.onChangeHandler(e)}
              value={this.state.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              ref={input => (this.password = input)}
            />
          </div>
          <button onClick={this.login}>Login </button>
        </form>
      </div>
    );
  }
}

export default LoginModal;

import React, { Component } from 'react';


// App component - represents the whole app
class App extends Component {
  state = {
    employees: []
  };

  render() {
    return (
      <div>
        <header>
          <h1>Schedule Tracker</h1>
        </header>
        <div className="App">{/* DashBoard
      Schedule */}</div>
      </div>
    );
  }
}

export default App
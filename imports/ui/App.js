import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { Schedule } from './components/Schedule';

const App = () => 
  <Router>
    <Switch>
      <Route path='/login' component={LoginPage}/>
      <Route path='/' component={Schedule}/>
    </Switch>
  </Router>

export default App;
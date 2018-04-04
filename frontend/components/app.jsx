import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
  <div>
    <h1>clickr</h1>
    <GreetingContainer />
  </div>
);

export default App;

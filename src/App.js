import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ConfirmRegister from './components/ConfirmRegister';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <PrivateRoute path="/home">
            </PrivateRoute>
            <Route component={ConfirmRegister} path="/confirm-register" />
            <Route component={Login} path="/log-in" />
            <Route component={Register} path="/" />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App

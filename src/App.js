import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <div>
              My app
            </div>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App

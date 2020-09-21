import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import Reports from './views/Reports';
import Products from './views/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/products' component={Products} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
    
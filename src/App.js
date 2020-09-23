import React from 'react';
import './App.css';
import AppNavbar from './components/layouts/AppNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';


function App() {
  return (
    <Router>
    <div className="app">
      <AppNavbar />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/client/add" component={AddClient}/>
        <Route exact path="/client/:id" component={ClientDetails}/>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

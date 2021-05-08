import React from 'react'
import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Passwords from './components/passwords/Passwords';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AddPassword from './components/passwords/AddPassword';
import EditPassword from './components/passwords/EditPassword';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Passwords} />
          <Route exact path="/passwords/add" component={AddPassword} />
          <Route exact path="/passwords/edit/:id" component={EditPassword} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

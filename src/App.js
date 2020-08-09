import React from 'react';
import './App.css';

import Header from './components/ui/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CharacterGrid from './components/characters/CharacterGrid';
import Home from './Base/Home';
import SecondHome from './Base/SecondHome';
import Navbar from './Navbar';

const App = () => {



  return (
    <Router>

      <Header />
      <Navbar />
      <br />
      <Route exact path='/' component={Home} />
      <Route exact path='/quotes' component={SecondHome} />
    </Router>

  );
}

export default App;

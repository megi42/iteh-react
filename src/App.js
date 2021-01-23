import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import {Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      
    </div>
  );
}

export default App;

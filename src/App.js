import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <Navbar  />
      <Switch>
      <Route path= "/" exact component={Home} />
      <Route path= "/about" component={About}/>
      <Route path= "/work" component={Work}/>
      <Route path= "/contact" component={Contact}/>
      </Switch>
      <Footer  />
      </React.Fragment>
    )
  }
}

export default App;
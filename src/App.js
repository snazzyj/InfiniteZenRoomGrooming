import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo3 from './assests/images/logo3.png';
import Homepage from './homepage/homepage.js';
import About from './about/about.js';
import Gallary from './gallary/gallary.js';
import Contact from './contact/contact.js';
import Grooming from './services/grooming.js';
import Nav from './nav/nav.js';
import MobileNav from './nav/mobileNav.js';
import AdditionalServices from './services/petsitting.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: false
    }
  }

  componentDidMount() {
    let mediaQuery = window.matchMedia('(max-width: 640px)');

    if(mediaQuery.matches) {
      this.setState({
        isSmallScreen: true
      })
    }
  }

  render() {
    const {isSmallScreen} = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <img className="logo" src={Logo3} alt="Infinite Zen Room Grooming" />
            
            {isSmallScreen ? (
              <MobileNav /> 
            ) : (
              <Nav />
            )
          }

          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallary" component={Gallary} />
              <Route path="/contact" component={Contact} />
              <Route path="/grooming" component={Grooming} />
              <Route path="/additionalservices" component={AdditionalServices} />
            </Switch>
          </main>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

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
import TabletNav from './nav/tabletNav.js';
import AdditionalServices from './services/petsitting.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTablet: false,
      isMobile: false
    }
  }

  componentDidMount() {
    let tabletMediaQuery = window.matchMedia('(max-width: 640px)');
    let mobileMediaQuery = window.matchMedia('(max-width: 450px)');

    if(tabletMediaQuery.matches) {
      this.setState({
        isTablet: true,
        isMobile: false
      })
    } 
    if (mobileMediaQuery.matches) {
      this.setState({
        isTablet: false,
        isMobile: true
      })
    }
  }

  render() {
    const {isTablet, isMobile} = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <img className="logo" src={Logo3} alt="Infinite Zen Room Grooming" />
            
          {
            isTablet ? <TabletNav /> : null
          }

          {
            isMobile ? <MobileNav /> : null
          }

          {
            !isMobile && !isTablet ? <Nav /> : null
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

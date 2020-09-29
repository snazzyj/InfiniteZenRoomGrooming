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
import Header from './header/header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isTablet: false,
      isMobile: false,
      popUpActive: true
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

  closePopUp = () => {
    this.setState({
      popUpActive: false
    })
  }

  render() {
    const {isTablet, isMobile, popUpActive} = this.state;
    return (
      <div className="App">
        <BrowserRouter>

          <Header isTablet={isTablet} isMobile={isMobile}/>
          
          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallary" component={Gallary} />
              <Route path="/contact" component={Contact} />
              <Route path="/grooming" render={(props) => <Grooming closePopUp={this.closePopUp} popUpActive={popUpActive}/>} />
              <Route path="/additionalservices" component={AdditionalServices} />
            </Switch>
          </main>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './homepage/homepage.js';
import About from './about/about.js';
import Gallery from './gallery/gallery.js';
import Contact from './contact/contact.js';
import Reviews from './reviews/reviews.js';
import Grooming from './services/grooming.js';
import Nav from './nav/nav';
import TabletNav from './nav/tabletNav';
import MobileNav from './nav/mobileNav';
import AdditionalServices from './services/petsitting.js';
import PawPrint from './assests/images/paw_print.png';
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
    // let tabletMediaQuery = window.matchMedia('(max-width: 845px)');
    let mobileMediaQuery = window.matchMedia('(max-width: 850px)');

    // if (tabletMediaQuery.matches) {
    //   this.setState({
    //     isTablet: true,
    //     isMobile: false
    //   })
    // }
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
    const { isTablet, isMobile, popUpActive } = this.state;
    return (
      <div className="App">
        <BrowserRouter>

          {isMobile ? <MobileNav /> : null}
          {isTablet ? <TabletNav /> : null}
          {!isMobile && !isTablet ? <Nav /> : null}

          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallary" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/grooming" render={(props) => <Grooming closePopUp={this.closePopUp} popUpActive={popUpActive} />} />
              <Route path="/additionalservices" component={AdditionalServices} />
            </Switch>
          </main>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

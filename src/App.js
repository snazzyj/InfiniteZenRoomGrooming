import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './homepage/homepage.js';
import About from './about/about.js';
import Gallery from './gallery/gallery.js';
import Contact from './contact/contact.js';
import Reviews from './reviews/reviews.js';
import Grooming from './services/grooming.js';
import Nav from './nav/nav';
import MobileNav from './nav/mobileNav';
import AdditionalServices from './services/petsitting.js';
import './App.css';

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
    let mobileMediaQuery = window.matchMedia('(max-width: 850px)');

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
    const { isMobile, popUpActive } = this.state;
    return (
      <div className="App">
        <BrowserRouter>

          {isMobile ? <MobileNav /> : <Nav />}
          {/* {!isMobile ? <Nav /> : null} */}

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

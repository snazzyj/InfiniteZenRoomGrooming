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
import Upload from './uploader/upload';
import Footer from './footer/footer';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isTablet: false,
      isMobile: false,
      popUpActive: true,
      photos: [],
      user: [],
      isLoggedIn: false
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

    fetch('https://pacific-fortress-97426.herokuapp.com/', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((photos) => {
      this.setState({
        photos
      })
    }).catch((e) => {
      console.log({ e })
    })
  }

  componentWillUnmount() {
    localStorage.removeItem('user')
  }

  closePopUp = () => {
    this.setState({
      popUpActive: false
    })
  }

  setUserState = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    this.setState({
      user: data,
      isLoggedIn: true
    })
  }

  render() {
    const { isMobile, popUpActive, photos, user, isLoggedIn } = this.state;
    return (
      <div className="App">
        <BrowserRouter>

          {isMobile ? <MobileNav /> : <Nav />}

          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallary" component={() => <Gallery photos={photos} />} />
              <Route path="/contact" component={Contact} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/grooming" render={(props) => <Grooming closePopUp={this.closePopUp} popUpActive={popUpActive} />} />
              <Route path="/additionalservices" component={AdditionalServices} />
              <Route path="/upload" component={() => <Upload user={user} isLoggedIn={isLoggedIn} setUserState={this.setUserState} />} />
            </Switch>
          </main>

          <Footer windowWidth={isMobile} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

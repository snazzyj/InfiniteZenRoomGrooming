import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Logo from './assests/images/logo.png';
import Logo2 from './assests/images/logo2.png';
import Homepage from './homepage/homepage.js';
import About from './about/about.js';
import Gallary from './gallary/gallary.js';
import Contact from './contact/contact.js';
import Services from './services/services.js';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
        <header>
              <img className="logo" src={Logo2} alt="Infinite Zen Room Grooming" />
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallary">Gallary</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/services">Services</Link>
            </nav>
        </header>
          <main>


            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallary" component={Gallary} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
            </Switch>
          </main>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

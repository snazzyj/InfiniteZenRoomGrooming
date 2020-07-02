import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Logo3 from './assests/images/logo3.png';
import Homepage from './homepage/homepage.js';
import About from './about/about.js';
import Gallary from './gallary/gallary.js';
import Contact from './contact/contact.js';
import Grooming from './services/grooming.js';
import AdditionalServices from './services/petsitting.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    }
  }

  toggleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }))
  }

  render() {

    const {isHovered} = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <img className="logo" src={Logo3} alt="Infinite Zen Room Grooming" />
            <nav>
                <FontAwesomeIcon icon={faPaw} size="xs" />
              <Link to="/">
                  Home
              </Link>
                <FontAwesomeIcon icon={faPaw} size="xs" />
              <Link to="/about">
                  About
              </Link>
                <FontAwesomeIcon icon={faPaw} size="xs" />
              <Link to="/gallary">
                  Gallary
              </Link>
                <FontAwesomeIcon icon={faPaw} size="xs" />
              <Link to="/contact">
                  Contact
              </Link>
                <FontAwesomeIcon icon={faPaw} size="xs" />
              <li className="menu" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                Services
                {isHovered 
                ?
                <div className="subMenu">
                  <Link to="/grooming">
                  Grooming Services
                  </Link>
                  <Link to="/additionalservices">
                  Additional Services
                  </Link>
                </div>
                :
                <div className="subMenu">
                <Link to="/grooming" className="hidden">
                Grooming Services
                </Link>
                <Link to="/additionalservices" className="hidden">
                Additional Services
                </Link>
              </div>
                }
              </li>

                <FontAwesomeIcon icon={faPaw} size="xs" />

            </nav>

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

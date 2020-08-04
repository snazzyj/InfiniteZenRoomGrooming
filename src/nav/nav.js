import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
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
            <nav className="nav">
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
              Gallery
          </Link>
            <FontAwesomeIcon icon={faPaw} size="xs" />
          <Link to="/contact">
              Contact
          </Link>
            <FontAwesomeIcon icon={faPaw} size="xs" />
          <li className="menu" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            Services
            {isHovered 
            &&
            <div className="subMenu">
              <Link to="/grooming">
              Grooming Services
              </Link>
              <Link to="/additionalservices">
              Additional Services
              </Link>
            </div>
            }
          </li>

            <FontAwesomeIcon icon={faPaw} size="xs" />

        </nav>
        )
    }
}

export default Nav
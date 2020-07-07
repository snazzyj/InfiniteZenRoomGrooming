import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './mobile.css'

class MobileNav extends Component {

    state = {
        isHovered: false
    }


    toggleHover = () => {
        this.setState(prevState => ({
          isHovered: !prevState.isHovered
        }))
      }

    render() {
        const {isHovered} = this.state;
        return (
            <div className="container" ref={this.container}>
                    <nav className="mobileNav">
                  <Link to="/" onClick={this.closeNavBar}>
                      Home
                    <FontAwesomeIcon icon={faPaw} size="xs" />
                  </Link>
                  <Link to="/about" onClick={this.closeNavBar}>
                      About
                    <FontAwesomeIcon icon={faPaw} size="xs" />
                  </Link>
                  <Link to="/gallary" onClick={this.closeNavBar}>
                      Gallary
                    <FontAwesomeIcon icon={faPaw} size="xs" />
                  </Link>
                  <Link to="/contact" onClick={this.closeNavBar}>
                      Contact
                    <FontAwesomeIcon icon={faPaw} size="xs" />
                  </Link>
                  <li className="menu" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    Services
                    <FontAwesomeIcon icon={faPaw} size="xs" />
                    {isHovered 
                    ?
                    <div className="subMenuMobile">
                      <Link to="/grooming">
                      Grooming Services
                      </Link>
                      <Link to="/additionalservices">
                      Additional Services
                      </Link>
                    </div>
                    :
                    <div className="subMenuMobile">
                    <Link to="/grooming" className="hidden">
                    Grooming Services
                    </Link>
                    <Link to="/additionalservices" className="hidden">
                    Additional Services
                    </Link>
                  </div>
                    }
                  </li>        
                </nav>
            </div>
        )
    }
}

export default MobileNav
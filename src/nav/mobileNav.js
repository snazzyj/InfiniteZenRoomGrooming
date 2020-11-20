import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './mobile.css'

class mobileNav extends Component {

  container = React.createRef()
  state = {
    isHovered: false,
    isOpen: false
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  toggleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }))
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  handleClickOutside = (e) => {
    if(this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        isOpen: false
      })
    }
  }

  render() {
    const { isHovered, isOpen } = this.state;
    return (
      <div className="container" ref={this.container}>
        <button onClick={this.toggleMenu} className="menuBtn">Menu</button>
        {
          isOpen && (

            <nav className="mobileNav">
          <Link to="/" onClick={this.toggleMenu}>
            Home
                    <FontAwesomeIcon icon={faPaw} size="xs" />
          </Link>
          <Link to="/about" onClick={this.toggleMenu}>
            About
                    <FontAwesomeIcon icon={faPaw} size="xs" />
          </Link>
          <Link to="/gallary" onClick={this.toggleMenu}>
            Gallery
                    <FontAwesomeIcon icon={faPaw} size="xs" />
          </Link>
          <Link to="/contact" onClick={this.toggleMenu}>
            Contact
                    <FontAwesomeIcon icon={faPaw} size="xs" />
          </Link>
          <Link to="/reviews">
            Reviews
          <FontAwesomeIcon icon={faPaw} size="xs" />
          </Link>
          <li className="menu" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            Services
            <FontAwesomeIcon icon={faPaw} size="xs" />
            {isHovered && (
              <div className="subMenuMobile">
                <Link to="/grooming">
                  Grooming Services
                        </Link>
                <Link to="/additionalservices">
                  Additional Services
                        </Link>
              </div>
            )}
          </li>
        </nav>
          )
        }
      </div>
    )
  }
}

export default mobileNav
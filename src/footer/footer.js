import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import './footer.css';
// https://www.facebook.com/izrgrooming
class Footer extends Component {
    render() {
        const isMobile = this.props.windowWidth
        return (
            <div className="footer">
                {isMobile ? 
                <ul className="mobileFooter">
                    <li>
                        <a href="tel:+16085014742">
                            <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
                        </a>
                    </li>
                    <li>    
                        <a href="mailto:zenroomgrooming@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/izrgrooming" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} size="lg"/>
                        </a>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
                        <span className="yellowText">{" "}(608) 501-4742</span>
                    </li>
                    <li>
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                            <span className="yellowText">{" "}zenroomgrooming@gmail.com</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFacebookF} size="lg"/>{" "}
                        <a href="https://www.facebook.com/izrgrooming">IZRG Page</a>
                    </li>
                </ul>
                }
            </div>
        )
    }
}

export default Footer
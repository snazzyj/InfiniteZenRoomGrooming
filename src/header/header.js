import React, { Component, Fragment } from 'react';
import Logo3 from '../assests/images/logo3.png';
import Nav from '../nav/nav.js';
import MobileNav from '../nav/mobileNav.js';
import TabletNav from '../nav/tabletNav.js';

class Header extends Component {
    render() {
        const {isMobile, isTablet} = this.props;

        return (
            <Fragment>
                <header className="header">
                    <img className="logo" src={Logo3} alt="Infinite Zen Room Grooming" />
                    {/* {isMobile ? <MobileNav /> : null}
                    {isTablet ? <TabletNav /> : null}
                    {!isMobile && !isTablet ? <Nav /> : null} */}
                </header>
            </Fragment>
        )
    }
}

export default Header;
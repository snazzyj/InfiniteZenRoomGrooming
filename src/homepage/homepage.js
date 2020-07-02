import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section className="missionStatement">
                    <p>Infinite Zen Room Grooming was created with the knowledge that grooming can be a stressful experience for both owner and pet.
                        To create the "Zen" experience for everyone, whether the grooming is done at a home or in a shop, there are a few elements
                        that go into the "Zen" experience. For the best experience possible for you and your furry friend we use aromatherapy, 
                        dim lighting and gentle relaxation music playing throughout the whole visit.
                        We keep our standards high and everyone's anxiety low with great communication about the options available for your dog's coat.
                        Working together to accomplish how you want your best furry friend to look and feel is what Infinite Zen Room Grooming is all about.                         
                    </p>
                </section>

                <section className="links">
                    <div className="dogGrooming">
                        <Link to="/grooming">Dog Grooming</Link>
                    </div>
                    <div className="petService">
                        <Link to="/additionalservices">Pet Services</Link>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Homepage;
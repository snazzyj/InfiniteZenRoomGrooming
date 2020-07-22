import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section className="missionStatement">
                    <p> 
                        We at Infinite Zen Grooming understand that grooming can be a stressful experience for all. 
                        Our intention is to create a calm “Zen” experience for both you and your fur babies. 
                        Through the use of gentle massage, soft relaxation music, calming aromatherapy, and gentle acupressure point relaxation,
                        your pet will experience a grooming session that eases their anxiety and enables them to relax and enjoy the experience.
                        Great communication with you of what is desired and what is possible with your dogs coat is crucial to keep standards high and anxiety low.
                        Gentle communication with your pet throughout enhances the experience even more.                         
                    </p>
                </section>

                <section className="links">
                    <div className="dogGrooming">
                        <Link to="/grooming">Pet Grooming</Link>
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
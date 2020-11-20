import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../assests/images/profile.png';
import HomepageReviews from '../reviews/homepage-reviews.js';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section className="missionStatement">
                    <p>
                        We at <strong>Infinite Zen Room Grooming</strong> understand that grooming can be a stressful experience for all.
                        Our intention is to create a calm “<span>Zen</span>” experience for both you and your fur babies.
                        Through the use of gentle massage, soft relaxation music, calming aromatherapy, and gentle acupressure point relaxation,
                        your pet will experience a grooming session that eases their anxiety and enables them to relax and enjoy the experience.
                        Great communication with you of what is desired and what is possible with your dogs coat is crucial to keep standards high and anxiety low.
                        Gentle communication with your pet throughout enhances the experience even more.
                    </p>
                </section>
                <section className="homepageAbout">
                        <h1>Meet Jenn Joyce</h1>
                    <div>
                        <img src={ProfilePic} alt="Jennifer Joyce" className="profilePic" />
                        <p>
                            As an animal lover of all shapes and sizes, Jenn has years of experience and has developed a passion working with dogs  since she was very young.
                            Participating in many dog obedience classes, agility, canine good citizen, showmanship and doga classes she has become well versed in dog behavior.
                        </p>
                        <Link to="/about">Learn More</Link>
                    </div>
                </section>
                <section className="serviceLinks">
                    <h1>Our Services</h1>
                    <div className="dogGrooming">
                        <Link to="/grooming">Pet Grooming</Link>
                    </div>
                    <div className="petService">
                        <Link to="/additionalservices">Pet Services</Link>
                    </div>
                    <p>Call <strong>(608) 501-4742</strong> to schedule an appointment today!</p>
                </section>
                <HomepageReviews />
            </Fragment>
        )
    }
}

export default Homepage;
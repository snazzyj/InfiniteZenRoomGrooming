import React, { Component } from 'react';
import Selfie from '../assests/images/selfie.jpg';

class About extends Component {
  constructor() {
    super();
    this.state = {
      isSmallScreen: false
    }
  }

  componentDidMount() {
    let mediaQuery = window.matchMedia('(max-width: 400px)');

    if (mediaQuery.matches) {
      this.setState({
        isSmallScreen: true
      })
    }
  }
  render() {
    return (
      <section className="about">
        <h1>
        Jenn Joyce
        </h1>
        <div className="aboutContent">
          <img src={Selfie} alt="Selfie with Murphy" className="selfiePic"/>
          <p>
            Jenn discovered her grooming career in 2014, but it didn’t take off until 2015 when Jenn was gifted with the opportunity to run a grooming business with her grooming partner and friend.
            Later, she went to work at a small shop in Oregon to work with a groomer who she shadowed in her high school years.
            Jenn has developed her skills by shadowing many different groomers, grooming her own dogs, and studying dogs and groomers at shows.
            While working at one of the top grooming salons in Madison, she decided that her dream of owning a grooming salon was about to kick off.
            Having more than 6 years of grooming under her belt, Jenn’s knowledge is strong and her confidence is growing.
          </p>
          <p>
            Making dogs and cats look their best is what she lives for! Giving them the best experience is what is most important to her.
            Ensuring that both the owner and the pet are calm, happy and zen  is priority to Jenn.
          </p>
        </div>

      </section>
    )
  }
}

export default About;
import React, { Component } from 'react';
import ProfilePic from '../assests/images/profile.png'

class About extends Component {
  constructor(props) {
    super(props);
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
    const { isSmallScreen } = this.state;
    return (
      <section className="about">
        <h1>Get to know {' '}
          {isSmallScreen && (
            <br />
          )}
        Jenn Joyce!
        </h1>
        <img src={ProfilePic} alt="Jennifer Joyce" />
        <div className="aboutContent">

          <p>
            As an animal lover of all shapes and sizes, Jenn has years of experience and has developed a passion working with dogs  since she was very young.
            Participating in many dog obedience classes, agility, canine good citizen, showmanship and doga classes she has become well versed in dog behavior.
          </p>
          <p>
            She is 28 years old and after years of strayed education and experience, her heart lead her back to her true passion of animals.
            Jenn has worked in different dog daycare and boarding facilities handling dogs.
            Although she loved to be surrounded by over 100 dogs in a play yard all day, she knew it wasn’t enough.
            She wanted the one on one time with dogs to give them the love and TLC to make them happy and their owners happier!
          </p>

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
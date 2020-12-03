import React, { Component } from 'react';
import Slider from 'react-slick';
import PawPrint from '../assests/images/paw_print.png';
import './reviews.css';

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipe: false,
    adaptiveHeight: true,
}

const Homepage_User_Reviews = [
    {
        name: "Erica",
        message: `Jenn is AMAZING she has been grooming Babe for the past 4 years.  
                    She is gentle and patient with my pup as she is getting up there in age.  
                    My dog is always excited to see Jenn.  Our whole family loves her sparkling personality. 
                    We highly recommended Zen Room Grooming`
    },
    {
        name: "Kate",
        message: `Bob N Mary Mo had the best grooming session ever!
        Thanks to Jenn Joyce at Infinite Zen Room Grooming, LLC. She comes to your home. They were calm with her and the results were amazing. Grateful. `
    },
    {
        name: "Lori",
        message: `Jenn is just simply the best. I rescued my little girl Gabriella from a very traumatic situation and she was terrified of everything and everyone, 
        especially groomers. Jenn won her over the first time they met. Her kind, loving and nurturing approach to animals is amazing. 
        Plus, she adds in some magic like lavender essential oil, bath time massage, gentle kind and loving words and soothing CBD. 
        The end results are a beautifully groomed dog who has just enjoyed a very pleasant day at the spa.`
    },
    {
        name: "Mackenzie",
        message: `Jenn has been our groomer for close to two years now. We have a Great Pyrenees and Jenn has been the only groomer for Ellie. 
        The bond that they have is so amazing, and every groom is perfect. She's even helped with our other two large dogs, both Doberman/Shepherd mixes. 
        The attention to detail and compassion that Jenn has are just a few reasons why we will continue to go to Jenn for all of our grooming needs.`
    },
    {
        name: 'Kate',
        message: `Jenn is the best! Her gentle disposition and CBD option keep my crazy dogs calm. and the finished results are amazing. AND she comes to You!`
    }
]

class HomepageReviews extends Component {
    render() {
        return (
            <section className="homepageReviews">
                    {/* <div className="pawprint_reviews_left">
                        <img src={PawPrint} alt="paw prints" className="paw_prints" />
                    </div>
                    <div className="pawprint_reviews_right">
                        <img src={PawPrint} alt="paw prints" className="paw_prints" />
                    </div> */}
                <div className="wrapper">
                    <h1>Client Reviews</h1>
                    <Slider {...settings}>
                    {Homepage_User_Reviews.map((review, idx) => {
                            return (
                                <div key={idx} style={{ padding: 1, height: 200, backgroundColor: '#7993A0' }}>
                                    <p className="clientMessage">"{review.message}"</p>
                                    <p className="clientName">-{review.name}</p>
                                </div>
                            )
                        })} 
                    </Slider>
                </div>
            </section>
        )
    }
}

export default HomepageReviews;
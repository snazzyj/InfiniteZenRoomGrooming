import React, { Component } from 'react';
import ReviewBank from './review_bank.js';
import Slider from 'react-slick';
import './reviews.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipe: false
}

class Reviews extends Component {
    render() {
        return (
            <section className="reviewSection">
                <div className="wrapper">
                    <h1>Client Reviews</h1>
                    <Slider {...settings}>
                        {ReviewBank.map((review, idx) => {
                            console.log(review)
                            return (
                                <div key={idx}>
                                    <p className="clientMessage">" {review.message} "</p>
                                    <p className="clientName">{review.name}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Reviews;
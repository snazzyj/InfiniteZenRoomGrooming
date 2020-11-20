import React, { Component } from 'react';
import ReviewBank from './review_bank.js';
import './reviews.css';

class Reviews extends Component {
    render() {
        return (
            <section className="reviewSection">
                <div className="wrapper">
                    <h1>Zen Roomers Reviews</h1>
                    {ReviewBank.map((review, idx) => {
                            return (
                                <div key={idx} className="cl_review">
                                    <p className="clientMessage">"{review.message}"</p>
                                    <p className="clientName">-{review.name}</p>
                                    <span className="border-line"></span>
                                </div>
                            )
                        })} 
                </div>
            </section>
        )
    }
}

export default Reviews;
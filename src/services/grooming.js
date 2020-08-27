import React, { Component, Fragment } from 'react';
import Popup from '../popup/popup.js';
import './services.css';

const services = [
    {
        serviceName: 'Nail Trim',
        price: '$12'
    },
    {
        serviceName: 'A La Carte Anal Glands',
        price: '$18',
    },
    {
        serviceName: 'A La Carte CBD Oil',
        price: '$6',
    },
    {
        serviceName: 'Bath And Blow Dry*',
        price: '$20-$90',
    },
    {
        serviceName: 'Blowout',
        price: '$50-$95',
    },
    {
        serviceName: 'Brush',
        price: '$10-$25',
    },
    {
        serviceName: 'Massage included during Bath',
        price: ''
    }
]

class Grooming extends Component {
    render() {
        return (
            <Fragment>

                {this.props.popUpActive
                ? <Popup closePopUp={this.props.closePopUp}/>
                : ""
                }
                <section className="services">
                    <h2>Providing The Best Care For Your Best Friends</h2>

                    <h3>Grooming Services Available</h3>

                    <div className="groomingService">

                        {services.map((service, index) => {
                            return (
                                <div className="serviceAndPrice" key={index}>
                                    <div>
                                        {service.serviceName}
                                    </div>
                                    <div>
                                        {service.price}
                                    </div>
                                </div>
                            )
                        })}

                        <p>*Note: Grooming costs will vary depending on your pet’s breed and coat condition</p>
                        <p>** Bath and Blow Dry for Short hair and smaller breeds</p>
                        <p>*** Blowout for Double coated and large breeds</p>

                        <h3>Milage</h3>
                        <ul>
                            <li>
                                <p>Mileage: $0.55 / Mile outside the Dane County Area.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Grooming
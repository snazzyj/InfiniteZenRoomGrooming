import React, { Component, Fragment } from 'react';
import Popup from '../popup/popup.js';
import './services.css';

const services = [
    {
        serviceName: 'Bath And Blow Dry (Cut Included)*',
        price: '$20-$100',
    },
    {
        serviceName: 'Blowout (Cut if necessary)',
        price: '$50-$105',
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

const addOns = [
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
                    <h3>Providing The Best Care For Your Best Friends</h3>


                    <div className="groomingService">

                    <h2>Grooming Services</h2>

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

                        <h2>Add Ons</h2>
                        {addOns.map((addon, index) => {
                            return (
                                <div className="serviceAndPrice" key={index}>
                                <div>
                                    {addon.serviceName}
                                </div>
                                <div>
                                    {addon.price}
                                </div>
                            </div> 
                            )
                        })}


                        <div className="mileage">
                            <h3>Mileage</h3>
                            <p>$0.55 / Mile outside the Dane County Area</p>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Grooming
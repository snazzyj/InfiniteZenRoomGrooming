import React, {Component} from 'react';
import './services.css';

class AdditionalServices extends Component {
    render() {
        return (
            <section className="services">
                <h1>Pet Care A La Carte Packaging</h1>

                <div className="additionalServices">

                <div className="overnight">
                <h2>Overnight Stays</h2>
                <ul>
                    <li>Dogs: $55 (Up to 2) per Night</li>
                    <li>$12 <span>per additional dog</span></li>

                    <li>4th dog is free!</li>
                    <li>
                        <h4>Includes:</h4>
                        <ul className="subList">
                            <li>2 potties per day</li>
                            <li>Unlimited let outs when I am there</li>
                            <li>AM and PM feedings</li>
                            <li>$5 per additional feeding</li>
                            <li>Fresh water change at anytime it is needed</li>
                            <li>$5 for medicating per day</li>
                        </ul>
                    </li>
                </ul>
                </div>

                <div className="petCare">
                <h2>Additional Pet Care</h2>
                <ul>
                    <li>$18 per Day For The Following Pets:
                        <ul className="subList">
                            <li>Lizards</li>
                            <li>Snakes</li>
                            <li>Guinea Pigs</li>
                            <li>Hamsters</li>
                            <li>Gerbils</li>
                            <li>Birds</li>
                            <li>Fish</li>
                            <li>Chickens</li>
                        </ul>
                    </li>

                    <li>Cats: 25$ per Night (Up to 2)</li>
                    <li>$8 <span>per additional cat</span></li>
                    <br />

                    <li><h4>Includes:</h4>
                        <ul className="subList">
                            <li>Feeding</li>
                            <li>Watering</li>
                            <li>Bedding Change (if necessary)</li>
                            <li>Water Change (does NOT include salt water; fresh water only)</li>
                            <li>Handling (if possible or requested)</li>
                        </ul>
                    </li>
                </ul>
                </div>
                
                <div className="mileage">
                    <h3>Mileage</h3>
                    <p>$0.55 / Mile outside the Dane County Area</p>
                </div>
                </div>

            </section>
        )
    }
}

export default AdditionalServices;
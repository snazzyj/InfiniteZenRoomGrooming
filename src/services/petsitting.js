import React, {Component} from 'react';
import './services.css';

class AdditionalServices extends Component {
    render() {
        return (
            <section className="services">
                <h1>Pet Care A La Carte Packaging</h1>
                <h3>Overnight Stays</h3>
                <ul>
                    <li>$55 (up to 2 dogs) per night <span>$12 per additional dog</span></li>
                    <li>4th dog is free</li>
                    <li>Overnight stay includes:
                        <ul className="subList">
                            <li>2 potties per day</li>
                            <li>Unlimited let outs when I am there</li>
                            <li>AM and PM feedings</li>
                            <li>$5 per additional feeding</li>
                            <li>Fresh water change at anytime it is needed</li>
                        </ul>
                    </li>
                    <li>$5 for medicating per day</li>
                </ul>


                <h3>Additional Pet Care</h3>

                <ul>
                    <li>$8 per Day For The Following Pets:
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

                    <li>
                        Cats: 12$ per Day
                    </li>

                    <li>Includes:
                        <ul className="subList">
                            <li>Feeding</li>
                            <li>Watering</li>
                            <li>Bedding Change (if necessary)</li>
                            <li>Water Change (does NOT include salt water; fresh water only)</li>
                            <li>Handling (if possible or requested)</li>
                        </ul>
                    </li>
                </ul>

                <h3>Mileage</h3>
                <p>$0.55/mile outside the greater Madison area.</p>
            </section>
        )
    }
}

export default AdditionalServices;
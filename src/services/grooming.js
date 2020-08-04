import React, {Component} from 'react';
import './services.css';

class Grooming extends Component {
    render() {
        return (
           <section className="services">
                <h2>Providing The Best Care For Your Best Friends</h2>

                <h3>Grooming Services Available</h3>

                <div className="groomingService">
                    <div className="serviceAndPrice">
                        <div>
                            Nail Trim
                        </div>

                        <div>
                            $12
                        </div>
                    </div>

                    <div className="serviceAndPrice">
                        <div>A La carte Anal Glands</div>
                        <div>$18</div>
                    </div>
                    <div className="serviceAndPrice">
                        <div>Bath and Blow Dry**</div>
                        <div>$20-$90</div>
                    </div>
                    <div className="serviceAndPrice">
                        <div>Blowout***</div>
                        <div>$50-$95</div>
                    </div>
                    <div className="serviceAndPrice">
                        <div>Brush</div>
                        <div>$10-$25</div>
                    </div>

                    <p>*Note: Grooming costs will vary depending on your pet’s breed and coat condition</p>
                    <p>** Bath and Blow Dry for Short hair and smaller breeds</p>
                    <p>*** Blowout for Double coated and large breeds</p>
                    
                    <h3>Milage</h3>
                    <ul>
                        <li>
                            <p>Milage: $0.55 / Mile outside the Dane County Area.</p>
                        </li>
                    </ul>
                </div>
           </section> 
        )
    }
}

export default Grooming
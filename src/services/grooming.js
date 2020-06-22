import React, {Component} from 'react';
import './services.css';

class Grooming extends Component {
    render() {
        return (
           <section className="services">
                <h2>Providing The Best Care For Your Best Friends</h2>

                <h3>Grooming Services Available :</h3>
                <ul>
                    <li>
                        <p className="service">
                            Nail Trim
                        </p>
                        <p className="cost">
                            $12
                        </p>
                    </li>
                    <li>
                        <p className="service">
                            A La Carte Anal Glands
                        </p>
                        <p className="cost">
                            $18
                        </p>
                    </li>
                    <li>
                        <p className="service">
                            Bath and Blow Dry(short hair and smaller breeds) 
                        </p>
                        <p className="cost">
                            $20-$90
                        </p>
                    </li>
                    <li>
                        <p className="service">
                            Blowout (double coated and large breeds)
                        </p>
                        <p className="cost">
                            $50-$95
                        </p>
                    </li>
                    <li>
                        <p className="service">
                            Brush
                        </p>
                        <p className="cost">
                            $10-$25
                        </p>
                            
                    </li>
                    <p>*Note: Grooming costs will vary depending on your pet’s breed and coat condition</p>
                </ul>
           </section> 
        )
    }
}

export default Grooming
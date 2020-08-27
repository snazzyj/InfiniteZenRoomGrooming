import React, {Component} from 'react';
import DogPhoto from '../assests/images/YinYangDog.jpg';
import './popup.css'

class Popup extends Component {
    render() {
        return (
            <section className="popUp">
                <div className="popUpContainer">
                    <button onClick={this.props.closePopUp} className="closeOutBtn">X</button>
                    <h1>A New Grooming Experience</h1>
                    <h3>Now offering <span>Massages</span> during bath</h3>
                    <h3><span>CBD Oil</span> now available to add on for the <span>ultimate zen experience</span></h3>
                    <img src={DogPhoto} alt="Dog with Cucumbers" />
                    
                </div>
            </section>
        )
    }
}

export default Popup
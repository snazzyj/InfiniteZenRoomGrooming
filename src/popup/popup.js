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
                    <h3>Now offering Massages during bath</h3>
                    <h3>CBD Oil now available to add on to the groom for ultimate zen experience</h3>
                    <img src={DogPhoto} alt="Dog with Cucumbers" />
                    
                </div>
            </section>
        )
    }
}

export default Popup
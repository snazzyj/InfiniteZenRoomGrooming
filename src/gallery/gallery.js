import React, {Component} from 'react';
import ImageData from './images.js';
import './gallery.css'

class Gallary extends Component {
    
    render() {
        return (
            <section className="dogGallary">
                <div className="gallary">
                    {ImageData.map((img, index) => {
                        return (
                            <img src={img.image} alt={img.text} key={index} className="dogPhotos"/>
                        )
                    })}
                </div> 
            </section>
        )
    }
}

export default Gallary;
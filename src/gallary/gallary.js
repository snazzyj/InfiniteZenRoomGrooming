import React, {Component, Fragment} from 'react';
import ImageData from './images.js';
import './gallary.css'

class Gallary extends Component {
    
    render() {
        console.log(ImageData)
        return (
            <Fragment>
                <ul className="gallary">
                    {ImageData.map((img, index) => {
                        return (
                            <li key={index}>
                                <img src={img.image} alt={img.text} className="dogPhotos"/>
                            </li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}

export default Gallary;
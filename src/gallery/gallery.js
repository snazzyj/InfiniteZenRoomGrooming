import React, {Component} from 'react';
import './gallery.css'

class Gallary extends Component {
    
    render() {
        const {photos} = this.props;
        console.log({photos})
        return (
            <section className="dogGallary">
                <div className="gallary">
                    {photos.map((img) => {
                        const {url} = img.photo;
                        return (
                                <img src={url} alt={img.text} key={img._id} className="dogPhotos"/>
                        )
                    })}
                </div> 
            </section>
        )
    }
}

export default Gallary;
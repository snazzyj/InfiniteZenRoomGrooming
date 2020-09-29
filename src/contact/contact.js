import React, {Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
    state = {
        cust_name: '',
        cust_email: '',
        cust_phone: '',
        message: ''
    }

    handleName = (e) => {
        this.setState({
            cust_name: e.currentTarget.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            cust_email: e.currentTarget.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            cust_phone: e.currentTarget.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.currentTarget.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {cust_email, cust_name, cust_phone, message} = this.state;
        const emailToSend = {
            cust_email,
            cust_name,
            cust_phone,
            message
        }

        emailjs.send('infinitezenroomgrooming', 'template_HXUJMT8p',
                         emailToSend, 'user_fspuszkuYu1bFDmfJ5V9B')
                         .then((result) => {
                             if(result.status) {
                                 alert('Message has been sent!')
                             }
                         }, (error) => {
                             alert('An error occured')
                         })

    }

    render() {
        return (
            <section className="contact">

                <div className="info">
                    <div>
                        <h1>Contact Us</h1>
                        <p>Phone: (608) 501-4742</p>
                        <p>Email: zenroomgrooming@gmail.com</p>
                    </div>
                </div>

                <form className="contactForm">
                    <h2>Send us a Message</h2>
                    <label htmlFor="name">Name
                        <input type="text" name="name" required onChange={this.handleName} />
                    </label>
                    <label htmlFor="email">Email
                        <input type="text" name="email" required onChange={this.handleEmail} />
                    </label>
                    <label htmlFor="phone">Phone
                        <input type="phone" name="phone" required onChange={this.handlePhone} />
                    </label>

                    <textarea onChange={this.handleMessage} placeholder="Your message here" rows="10"/>

                    <button onClick={this.handleSubmit}>Send Message</button>
                </form>
            </section>
        )
    }
}

export default Contact;
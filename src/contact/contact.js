import React, {Component, Fragment} from 'react';
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
                             console.log(result.text)
                         }, (error) => {
                             console.log(error.text)
                         })

    }

    render() {
        console.log(this.state)
        return (
            <section className="contact">
                <h1>Contact Us</h1>
                <p>Phone: (xxx) xxx - xxxx</p>
                <p>Email: xxx@xxx.com</p>

                <form className="contactForm">
                    <label htmlFor="name">Name
                        <input type="text" name="name" required onChange={this.handleName} />
                    </label>
                    <label htmlFor="email">Email
                        <input type="text" name="email" required onChange={this.handleEmail} />
                    </label>
                    <label htmlFor="phone">Phone
                        <input type="phone" name="phone" required onChange={this.handlePhone} />
                    </label>

                    <textarea onChange={this.handleMessage} placeholder="Your message here"/>

                    <button onClick={this.handleSubmit}>Send Email</button>
                </form>
            </section>
        )
    }
}

export default Contact;
import React, { Component, Fragment } from 'react';
import './upload.css'
const API_URL = 'https://pacific-fortress-97426.herokuapp.com'

class Upload extends Component {

    state = {
        image: null,
        error: null,
        message: null,
        showPopUp: false,
    }

    handleUpload = (e) => {
        e.preventDefault();
        const {token} = this.props.user
        let url = `${API_URL}/upload`;
        let fd = new FormData();
        fd.append('photo', this.state.image)
        if(!this.state.image.name.match(/\.(jpg|jpeg|png)$/)) {
            return this.setState({
                error: 'Please upload an image',
                showPopUp: true
            })
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: fd
        }).then((res) => {
            if (!res.ok) this.setState({error: "Something went wrong during the upload", message: null, showPopUp: true});
            return res.json();
        }).then((data) => {
            if(data) this.setState({message: "Upload Complete!", error: null, showPopUp: true})
        }).catch((e) => {
            console.log(e)
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = e.target;
        const url = `${API_URL}/login`;
        const user = {
            email: email.value,
            password: password.value
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            if(!res.ok) this.setState({error: 'Wrong email or password'})

            return res.json();
        }).then((data) => {
            this.props.setUserState(data)
        }).catch((e) => {
            console.log(e)
        })
    }

    onImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    resetState = () => {
        this.setState({
            error: null,
            message: null,
            showPopUp: false
        })
    }

    render() {
        const { isLoggedIn } = this.props;
        const {error, message, showPopUp} = this.state;
        return (
            <Fragment>
                {!isLoggedIn ? 
                    <form className="login_form" onSubmit={this.handleLogin}>
                        <label htmlFor="email">
                            Email
                            <input name="email" type="email" />
                        </label>

                        <label htmlFor="password">
                            Password
                            <input name="password" type="text" />
                        </label>
                        <input type="submit" value="Login" />
                    </form>
                :   
                <section className="upload">
                    <form className="upload_form" onSubmit={this.handleUpload}>
                        <input type="file" accept="image/*" name="photo" onChange={this.onImageChange} />
                        <input type="submit" value="upload" />
                    </form>

                    {showPopUp ?
                    <div className="upload_message">
                        <p>{error}</p>
                        <p>{message}</p>
                        <button onClick={this.resetState}>Close</button>
                    </div>
                    : '' }
                </section>
                }
            </Fragment>
        )
    }
}

export default Upload
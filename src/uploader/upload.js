import React, { Component, Fragment } from 'react';
const API_URL = 'https://pacific-fortress-97426.herokuapp.com'

class Upload extends Component {

    state = {
        image: null,
        error: null,
        message: null
    }

    handleUpload = (e) => {
        e.preventDefault();
        const {token} = this.props.user
        let url = `${API_URL}/upload`;
        let fd = new FormData();
        fd.append('photo', this.state.image)
        console.log(this.state.image)
        if(!this.state.image.name.match(/\.(jpg|jpeg|png)$/)) {
            this.setState({
                error: 'Please upload an image'
            })
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: fd
        }).then((res) => {
            if (!res.ok) this.setState({error: "Something went wrong during the upload", message: null});
            return res.json();
        }).then((data) => {
            if(data) this.setState({message: "Upload Complete!", error: null})
        }).catch((e) => {
            console.log(e)
        })
    }

    onImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = e.target;
        const url = `${API_URL}/login`;
        console.log(email.value, password.value)
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
            if(!res.ok) alert('Could not login')

            return res.json();
        }).then((data) => {
            this.props.setUserState(data)
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        const { user, isLoggedIn } = this.props;
        const {error, message} = this.state;
        console.log(this.state)
        console.log(this.props)
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

                    <p>{error}</p>
                    <p>{message}</p>
                </section>
                }
            </Fragment>
        )
    }
}

export default Upload
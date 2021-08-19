import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Footer/Footer"
import axios from "axios";
axios.defaults.withCredentials = true

function Login(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [signedIn, setSignedIn] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target
        setForm(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(form)
        axios.post("https://foodizone-server.herokuapp.com/login", form, {
            withCredentials: true
        })
            .then(function (response) {
                console.log(response.data)
                props.authenticated(response.data.authentication)
                setSignedIn(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    if (signedIn) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo authenticate-logo">foodizone</div>
            </Link>
            <div className="login-form">
                <form className="login-form-form" onSubmit={handleSubmit}>
                    <p className="login-form-creds">Username</p>
                    <input type="text" name="username" placeholder="example@example.com" className="login-form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleChange} />

                    <p className="login-form-creds">Password</p>
                    <input type="password" name="password" placeholder="Enter Password" className="login-form-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={handleChange} />
                    <button type="submit" className="login-form-submit">Log in</button>

                    <p className="register-link"> New User? <Link to="/authenticate/register" style={{ textDecoration: 'none' }}> Sign up</Link></p>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
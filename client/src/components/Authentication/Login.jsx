import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo authenticate-logo">foodizone</div>
            </Link>
            <div className="login-form">
                <form className="login-form-form">
                    <p className="login-form-creds">Username</p>
                    <input type="text" name="username" placeholder="example@example.com" className="login-form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <p className="login-form-creds">Password</p>
                    <input type="password" name="password" placeholder="Enter Password" className="login-form-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
                    <button type="submit" className="login-form-submit">Log in</button>
                    <p className="register-link"> New User? <Link to="/authenticate/register" style={{ textDecoration: 'none' }}> Sign up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;
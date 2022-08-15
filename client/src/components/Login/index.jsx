import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', {
            email: email,
            password: password
        }, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                //Do something with this -_-
            })
    }

    return(
        <div className='registerContainer'>
            <form onSubmit={submitHandler}>
                <label>
                    Email:
                    <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Register" />
            </form>
            <Link to='/register'>Don't have an account yet? Click here to sign up!</Link>
        </div>
    );
};

export default Login;
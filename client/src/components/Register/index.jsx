import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const getCookie = () => {
        let match = document.cookie.match(RegExp('(?:^|;\\s*)' + "loggedIn" + '=([^;]*)'));
        return match && match[1];
    }

    useEffect(() => {
        if(getCookie() == 'true'){
            navigate('/');
        }
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register', {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            settings: {}
        })
            .then(res => {
                console.log(res.data);
                navigate('/login')
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
                    Name:
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
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
                <label>
                    Confirm Password:
                    <input type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Register" />
            </form>
            <Link to='/login'>Already have an account? Click here to log in!</Link>
        </div>
    );
};

export default Register;
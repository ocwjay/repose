import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const getCookie = () => {
        let match = document.cookie.match(RegExp('(?:^|;\\s*)' + "loggedIn" + '=([^;]*)'));
        return match && match[1];
    }

    useEffect(() => {
        if(getCookie() == 'true'){
            navigate('/');
        }
    }, [])

    return(
        <div className='homeContainer'>
            <h1>Welcome to Repose!</h1>
            <div className='accountContainer'>
                <div className='loginRegisterContainer'>
                    <h3>New to Repose?</h3>
                    <Link to={'/register'}>Register</Link>
                </div>
                <div className='loginRegisterContainer'>
                    <h3>Have an account?</h3>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
            {/* Add more info and stuff here */}
        </div>
    );
};

export default Home;
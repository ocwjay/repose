import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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
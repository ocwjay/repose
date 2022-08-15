import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StartingPage.css';
import DateTime from '../DateTime';
import InspirationalQuote from '../InspirationalQuote';
import CalendarGlance from '../CalendarGlance';
import ToDoGlance from '../ToDoGlance';
import MenuTray from '../MenuTray';

function StartingPage() {
    const navigate = useNavigate();
    //set logged in user here to ensure logging in supplies the info needed, then PUSH THIS SHIT TO GITHUB
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/loggedInUser",
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const logout = (e) => {
        axios.post("http://localhost:8000/api/users/logout",
        {}, {withCredentials: true},
        )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className='startingPageContainer'>
            <div className='mainWidgetsContainer'>
                <p className='mainWidgets welcome'>Welcome {user.name}!</p> {/*Change this to be it's own component, with a random greeting and logged in user fname*/}
                <p onClick={logout}>Logout</p>
                <DateTime />
                <InspirationalQuote />
                <CalendarGlance />
                <ToDoGlance />
            </div>
            <MenuTray />
        </div>
    );
};

export default StartingPage;
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
    const [user, setUser] = useState({});

    const getCookie = () => {
        let match = document.cookie.match(RegExp('(?:^|;\\s*)' + "loggedIn" + '=([^;]*)'));
        return match && match[1];
    }

    useEffect(() => {
        if(getCookie() !== 'true'){
            navigate('/home');
        } else {
            axios.get("http://localhost:8000/api/users/loggedInUser",
                { withCredentials: true }
            )
                .then((res) => {
                    console.log(res.data);
                    setUser(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                })
        }
    }, [])

    return(
        <div className='startingPageContainer' style={{
            color: user.settings?.textColor,
            backgroundImage: `url(${user.settings?.backgroundImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
            }}>
            <div className='mainWidgetsContainer' style={{ backgroundColor: user.settings?.theme }}>
                <p className='mainWidgets welcome'>Welcome {user.name}!</p>
                <DateTime />
                <InspirationalQuote />
                <CalendarGlance user={user} />
                <ToDoGlance user={user} />
            </div>
            <MenuTray user={user} setUser={setUser} />
        </div>
    );
};

export default StartingPage;
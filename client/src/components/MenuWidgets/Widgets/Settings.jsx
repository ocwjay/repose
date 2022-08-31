import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../MenuWidgets.css';
import settingsIcon from '../settings-sliders.png';

function Settings(props) {
    const {user, setUser} = props;
    const navigate = useNavigate();

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
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };

    return(
        <div className='settingsContainer'>
            <div className='settingsHeader'>
                <img src={settingsIcon} alt="" className='settingsHeaderIcon' />
                <h2>Settings</h2>
            </div>
            <form>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <div>
                    <p>Theme:</p>
                    <label>
                        <input type="radio" className='' />
                    </label>
                    <label>
                        <input type="radio" className='' />
                    </label>
                    <label>
                        <input type="radio" className='' />
                    </label>
                    <label>
                        <input type="radio" className='' />
                    </label>
                    <label>
                        <input type="radio" className='' />
                    </label>
                    {/* figure out checkboxes please - ACTUALLY use radio buttons for this, checkboxes for backgrounds? */}
                </div>
                <div>
                    Text Color:
                    <label>
                        <input type="radio" className='' />
                    </label>
                    <label>
                        <input type="radio" className='' />
                    </label>
                </div>
                <div>
                    Menu Backgrounds:
                    <label>
                        <input type="checkbox" />
                    </label>
                </div>
                <input type="submit" value="Save Changes" />
            </form>
            <p onClick={logout}>Logout</p>
            {/* Link to delete account */}
            {/* Link to donate */}
        </div>
    )
};

export default Settings;
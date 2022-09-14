import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Settings.css';
import SettingsIcon from '../../icons/SettingsIcon';

function Settings(props) {
    const {user} = props;
    const navigate = useNavigate();
    const [name, setName] = useState(user.name);
    const [themeRadio, setThemeRadio] = useState(user.settings?.theme);
    const [textColorRadio, setTextColorRadio] = useState(user.settings?.textColor);
    const [lightDarkMode, setLightDarkMode] = useState(user.settings?.lightDarkMode);
    const [backgroundImageRadio, setBackgroundImageRadio] = useState(user.settings?.backgroundImg);

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
            <p>{themeRadio}</p>
            <div className='settingsHeader'>
                <SettingsIcon user={user} iconClass='settingsHeaderIcon' />
                <h2>Settings</h2>
            </div>
            <form>
                <label>
                    Name:
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </label>
                <div>
                    <p>Theme:</p>
                    <label>
                        <input type='radio'
                        name='themeRadio'
                        value='#22222299'
                        checked={themeRadio === '#22222299'}
                        onChange={(e) => setThemeRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='themeRadio'
                        value='#ffffff99'
                        checked={themeRadio === '#ffffff99'}
                        onChange={(e) => setThemeRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='themeRadio'
                        value='#ff000099'
                        checked={themeRadio === '#ff000099'}
                        onChange={(e) => setThemeRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='themeRadio'
                        value='#0066ff99'
                        checked={themeRadio === '#0066ff99'}
                        onChange={(e) => setThemeRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='themeRadio'
                        value='#66339999'
                        checked={themeRadio === '#66339999'}
                        onChange={(e) => setThemeRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='themeRadio'
                        value='#00000000'
                        checked={themeRadio === '#00000000'}
                        onChange={(e) => setThemeRadio(e.target.value)}
                        className='radioColor' />
                        <span className='xRadioSpan'>X</span>
                    </label>
                    {/* all radios will get their own class for the color they will be, radioColor class just positions and sizes */}
                </div>
                <div>
                    Text Color:
                    <label>
                        <input type='radio'
                        name='textColorRadio'
                        value='#000000'
                        checked={textColorRadio === '#000000'}
                        onChange={(e) => setTextColorRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='textColorRadio'
                        value='#ffffff'
                        checked={textColorRadio === '#ffffff'}
                        onChange={(e) => setTextColorRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='textColorRadio'
                        value='#ff0000'
                        checked={textColorRadio === '#ff0000'}
                        onChange={(e) => setTextColorRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='textColorRadio'
                        value='#0066ff'
                        checked={textColorRadio === '#0066ff'}
                        onChange={(e) => setTextColorRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                    <label>
                        <input type='radio'
                        name='textColorRadio'
                        value='#663399'
                        checked={textColorRadio === '#663399'}
                        onChange={(e) => setTextColorRadio(e.target.value)}
                        className='radioColor' />
                    </label>
                </div>
                <label>
                    Light/Dark Mode:
                    <select
                    value={lightDarkMode}
                    onChange={(e) => setLightDarkMode(e.target.value)}
                    >
                        <option value='#22222288'>Dark</option>
                        <option value='#ffffff22'>Light</option>
                    </select>
                </label>
                <div>
                    Background Image:
                    <label>
                        <input type='radio'
                        name='backgroundImageRadio'
                        value='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg'
                        checked={backgroundImageRadio === 'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg'}
                        onChange={(e) => setBackgroundImageRadio(e.target.value)}
                        className='radioBackground' />
                        {/* <span className='xRadioSpan'>X</span> */}
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
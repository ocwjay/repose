import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Settings.css';
import SettingsIcon from '../../icons/SettingsIcon';
import closeIconBlack from '../../icons/CloseIcon/cross.png'

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

    const updateUser = (e) => {
        axios.put(`http://localhost:8000/api/users/update/${user._id}`, {
            name: name,
            settings: {
                theme: themeRadio,
                textColor: textColorRadio,
                lightDarkMode: lightDarkMode,
                backgroundImg: backgroundImageRadio
            }
        }, { withCredentials: true })
            .then( res => {
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div className='settingsContainer'>
            <div className='settingsHeader'>
                <SettingsIcon user={user} iconClass='settingsHeaderIcon' />
                <h2>Settings</h2>
            </div>
            <form onSubmit={updateUser} className='settingsForm'>
                <label className='flexCol'>
                    Name:
                    <input type="text"
                    className='nameInput'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </label>
                <div className='flexCol'>
                    <p>Theme:</p>
                    <div className='radioContainer'>
                        <label class="container">
                            <input type='radio'
                            name='themeRadio'
                            value='#22222299'
                            checked={themeRadio === '#22222299'}
                            onChange={(e) => setThemeRadio(e.target.value)} />
                            <span className='checkmark black'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='themeRadio'
                            value='#ffffff99'
                            checked={themeRadio === '#ffffff99'}
                            onChange={(e) => setThemeRadio(e.target.value)} />
                            <span className='checkmark white'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='themeRadio'
                            value='#ff000099'
                            checked={themeRadio === '#ff000099'}
                            onChange={(e) => setThemeRadio(e.target.value)} />
                            <span className='checkmark red'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='themeRadio'
                            value='#0066ff99'
                            checked={themeRadio === '#0066ff99'}
                            onChange={(e) => setThemeRadio(e.target.value)} />
                            <span className='checkmark blue'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='themeRadio'
                            value='#66339999'
                            checked={themeRadio === '#66339999'}
                            onChange={(e) => setThemeRadio(e.target.value)} />
                            <span className='checkmark purple'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='themeRadio'
                            value='#00000000'
                            checked={themeRadio === '#00000000'}
                            onChange={(e) => setThemeRadio(e.target.value)} />
                            <span className='xRadioSpan checkmark'><img src={closeIconBlack} alt="" className='xRadioIcon' /></span>
                        </label>
                    </div>
                    {/* all radios will get their own class for the color they will be, radioColor class just positions and sizes */}
                </div>
                <div className='flexCol'>
                    Text Color:
                    <div className='radioContainer'>
                        <label class="container">
                            <input type='radio'
                            name='textColorRadio'
                            value='#000000'
                            checked={textColorRadio === '#000000'}
                            onChange={(e) => setTextColorRadio(e.target.value)}
                            className='radioColor' />
                            <span className='checkmark black'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='textColorRadio'
                            value='#ffffff'
                            checked={textColorRadio === '#ffffff'}
                            onChange={(e) => setTextColorRadio(e.target.value)}
                            className='radioColor' />
                            <span className='checkmark white'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='textColorRadio'
                            value='#ff0000'
                            checked={textColorRadio === '#ff0000'}
                            onChange={(e) => setTextColorRadio(e.target.value)}
                            className='radioColor' />
                            <span className='checkmark red'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='textColorRadio'
                            value='#0066ff'
                            checked={textColorRadio === '#0066ff'}
                            onChange={(e) => setTextColorRadio(e.target.value)}
                            className='radioColor' />
                            <span className='checkmark blue'></span>
                        </label>
                        <label class="container">
                            <input type='radio'
                            name='textColorRadio'
                            value='#663399'
                            checked={textColorRadio === '#663399'}
                            onChange={(e) => setTextColorRadio(e.target.value)}
                            className='radioColor' />
                            <span className='checkmark purple'></span>
                        </label>
                    </div>
                </div>
                <label className='flexCol'>
                    Light/Dark Mode:
                    <select
                    className='lightDarkSelect'
                    value={lightDarkMode}
                    onChange={(e) => setLightDarkMode(e.target.value)}
                    >
                        <option value='#22222288'>Dark</option>
                        <option value='#ffffff22'>Light</option>
                    </select>
                </label>
                <div className='flexCol'>
                    Background Image:
                    <div className='radioContainer'>
                        <label className='bgContainer'>
                            <input type='radio'
                            name='backgroundImageRadio'
                            value='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg'
                            checked={backgroundImageRadio === 'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg'}
                            onChange={(e) => setBackgroundImageRadio(e.target.value)}
                            />
                            <span className='bgCheckmark bgBeach'></span>
                        </label>
                        <label className='bgContainer'>
                            <input type='radio'
                            name='backgroundImageRadio'
                            value='https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png'
                            checked={backgroundImageRadio === 'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png'}
                            onChange={(e) => setBackgroundImageRadio(e.target.value)}
                            />
                            <span className='bgCheckmark bgPolygons'></span>
                        </label>
                        <label className='bgContainer'>
                            <input type='radio'
                            name='backgroundImageRadio'
                            value='https://cdn.pixabay.com/photo/2014/09/24/16/28/bricks-459299_960_720.jpg'
                            checked={backgroundImageRadio === 'https://cdn.pixabay.com/photo/2014/09/24/16/28/bricks-459299_960_720.jpg'}
                            onChange={(e) => setBackgroundImageRadio(e.target.value)}
                            />
                            <span className='bgCheckmark bgBricks'></span>
                        </label>
                        <label className='bgContainer'>
                            <input type='radio'
                            name='backgroundImageRadio'
                            value='https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_960_720.jpg'
                            checked={backgroundImageRadio === 'https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_960_720.jpg'}
                            onChange={(e) => setBackgroundImageRadio(e.target.value)}
                            />
                            <span className='bgCheckmark bgHills'></span>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Save Changes" className='settingsSubmitBtn' />
            </form>
            <p onClick={logout}>Logout</p>
            {/* Link to delete account */}
            {/* Link to donate */}
        </div>
    )
};

export default Settings;
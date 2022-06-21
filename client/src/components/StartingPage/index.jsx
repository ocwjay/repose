import React from 'react';
import './StartingPage.css';
import DateTime from '../DateTime';
import InspirationalQuote from '../InspirationalQuote';
import CalendarGlance from '../CalendarGlance';
import ToDoGlance from '../ToDoGlance';
import MenuTray from '../MenuTray';

function StartingPage() {
    return(
        <div className='startingPageContainer'>
            <div className='mainWidgetsContainer'>
                <p className='mainWidgets welcome'>Welcome SomeName!</p> {/*Change this to be it's own component, with a random greeting and logged in user fname*/}
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
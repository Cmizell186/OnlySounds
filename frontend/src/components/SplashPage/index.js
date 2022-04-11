import React from 'react';
import OnlySoundsLogo from './OnlySounds-logo.png';
import './SplashPage.css';
function SplashPage(){
    return (
        <div className='splash-holder'>
            <div className='onlySounds-image-container'>
                <img src={OnlySoundsLogo} alt='onlySounds'></img>
            </div>
            <div className='info-splash-container'>
                <h1>Sign up to start listening!</h1>
            </div>
        </div>
    )
}

export default SplashPage;


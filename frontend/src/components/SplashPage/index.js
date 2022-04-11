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
            <div className='profile-links'>
                <a href='https://github.com/Cmizell186' className='fa-brands fa-github fa-2x'/>
                <a href='https://www.linkedin.com/in/christopher-mizell-4b21a4174/' className='fa-brands fa-linkedin fa-2x'/>
            </div>
            <div>
                <h3>Created by Christopher Mizell</h3>
            </div>
        </div>
    )
}

export default SplashPage;

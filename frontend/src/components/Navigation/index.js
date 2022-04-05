import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import UploadSong from '../CreateNewSong/CreateNewSongButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    let homeLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <UploadSong />
            </>
        );
        homeLinks = (
            <>
                <NavLink to="/discover" className="homeButton">Home</NavLink>
            </>
        )
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <div id="navBar">
            {sessionUser ? homeLinks : <NavLink exact to="/" className="homeButton">Home</NavLink>}
            <div>
                <h1 className='onlysounds-title'>OnlySounds</h1>
            </div>
            <div className='navButtons'>
                {isLoaded && sessionLinks}
            </div>
        </div>
    )
}
export default Navigation;

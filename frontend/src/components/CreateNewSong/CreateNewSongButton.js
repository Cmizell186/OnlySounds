import React from "react";
import { NavLink } from "react-router-dom";
import './CreateNewSong.css';
function UploadSong() {
    return (
        <>
            <NavLink to='/newsong' className='newSongNavbutton'>Upload</NavLink>
        </>
    )
}

export default UploadSong;

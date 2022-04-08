import React from "react";
import { NavLink } from "react-router-dom";

function UpdateSongNavLink({id}) {
    return (
        <NavLink to={`/editsong/${id}`} className='edit-song-button'>
            Edit Song
        </NavLink>
    )
}

export default UpdateSongNavLink;

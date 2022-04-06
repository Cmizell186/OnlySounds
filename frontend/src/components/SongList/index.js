import React from 'react';
import './SongList.css';
import {NavLink} from 'react-router-dom';
function SongList({ songList }) {
    console.log(songList, "+++++++++++")
    return (
        <div className='songList'>
            {songList?.map((ele, idx) => (
                <NavLink to={`/songs/${ele?.id}`} className='individual-song' key={idx}>
                {ele?.title}
                <img src={ele?.imageUrl} alt='temp'></img>
                </NavLink>
            ))}
        </div>
    )
}

export default SongList;

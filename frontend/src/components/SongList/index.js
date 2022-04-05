import React from 'react';
import './SongList.css';
function SongList({ songList }) {
    return (
        <ul className='songList'>
            {songList.map((ele, idx) => (
                <li className='individual-song' key={idx}>
                {ele?.title}
                <img src={ele?.imageUrl}></img>
                </li>
            ))}
        </ul>
    )
}

export default SongList;

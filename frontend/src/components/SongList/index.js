import React from 'react';
import './SongList.css';
function SongList({ songList }) {
    return (
        <ul className='songList'>
            {songList.map((ele, idx) => (
                <li className='individual-song' key={idx}>{ele?.imageUrl}{ele?.title}</li>
            ))}
        </ul>
    )
}

export default SongList;

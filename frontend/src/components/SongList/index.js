import React from 'react';

function SongList({ songList }) {
    return (
        <ul>
            {songList.map((ele, idx) => (
                <li key={idx}>{ele?.imageUrl}{ele?.title}</li>
            ))}
        </ul>
    )
}

export default SongList;

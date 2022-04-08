import React, { useEffect, useState } from 'react';
import './SongList.css';
import { NavLink } from 'react-router-dom';
import { getAllSongs } from '../../store/songs';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../images/default-album-art.png';
function SongList() {
    const dispatch = useDispatch();
    const songList = useSelector(state => state.song.songs)
    // console.log(Array.isArray(songList));

    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])


    return (
        <div className='songList'>
            {songList?.map((ele, idx) => (
                <NavLink to={`/songs/${ele?.id}`} className='individual-song' key={idx}>
                    <p className='song-title'>{ele?.title}</p>
                    <div className='songImage'>
                    {ele?.imageUrl ?
                        <img src={ele?.imageUrl} height='150vh' width="150vw" ></img>
                        :
                        <img src={image} height='150vh' width='150vw'></img>
                    }
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default SongList;

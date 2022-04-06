import React, { useEffect } from 'react';
import './SongList.css';
import {NavLink} from 'react-router-dom';
import {getAllSongs} from '../../store/songs';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../images/default-album-art.png';
function SongList() {
    const dispatch = useDispatch();
    const songList = useSelector(state => state.song.songs)


    useEffect(() =>{
        dispatch(getAllSongs())
    }, [dispatch])


    return (
        <div className='songList'>
            {songList?.map((ele, idx) => (
                <NavLink to={`/songs/${ele?.id}`} className='individual-song' key={idx}>
                {ele?.title}
                <img src={ele?.imageUrl} alt={ele?.title}></img>
                </NavLink>
            ))}
        </div>
    )
}

export default SongList;

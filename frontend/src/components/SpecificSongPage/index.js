import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificSong } from "../../store/songs";
import './SpecificSongPage.css';
import image from '../../images/default-album-art.png';

function SpecificSong(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const currSong = useSelector(state => state.song.songs);
    const sessionUser = (state=> state.session.user);
    console.log(currSong)

    useEffect(async () =>{
       const res = await dispatch((getSpecificSong(id)))
    },[dispatch])

    return (
        <>
            <h1>{currSong?.title}</h1>
            <div>
                <img src={currSong?.imageUrl} alt={image}></img>
                <button>Play</button>
            </div>
        </>
    )
}

export default SpecificSong;

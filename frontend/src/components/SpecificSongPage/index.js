import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificSong, playingSong } from "../../store/songs";
import './SpecificSongPage.css';
import image from '../../images/default-album-art.png';

function SpecificSong(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const currSong = useSelector(state => state.song.currentSong);
    const sessionUser = (state=> state.session.user);
    // console.log(currSong)

    useEffect(() =>{
       dispatch((getSpecificSong(id)))
    },[dispatch, id])

    const handleCLick = (id) =>{

        dispatch(playingSong(id))
    }
    return (
        <>
            <h1>{currSong?.title}</h1>
            <div>
                <img src={currSong?.imageUrl} alt={image}></img>
                <button onClick={() => handleCLick(currSong.id)}>Play</button>
            </div>
            {sessionUser ? <></> : <></>}
        </>
    )
}

export default SpecificSong;

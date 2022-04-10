import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificSong, playingSong } from "../../store/songs";
import './SpecificSongPage.css';
import image from '../../images/default-album-art.png';
import EditSong from '../UpdateSong/UpdateSongNavLink';
import DeleteSong from '../DeleteSong/index';
import CommentsArea from "../CommentsSection/index";
import NewComment from '../CommentsSection/CreateComment'
function SpecificSong() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currSong = useSelector(state => state.song.currentSong);
    const sessionUser = (state => state.session.user);

    useEffect(() => {
        dispatch((getSpecificSong(id)))
    }, [dispatch, id])

    const handleCLick = (id) => {

        dispatch(playingSong(id))
    }
    return (
        <div className="song-info-container">
            <h1 className="song-title">{currSong?.title}</h1>
            <div className="image-container">
                <div className='fa-solid fa-play fa-4x' onClick={() => handleCLick(currSong.id)}></div>
                {currSong.imageUrl ?
                    <img src={currSong?.imageUrl} height='150vh' width="150vw" onClick={() => handleCLick(currSong.id)}></img>
                    :
                    <img src={image} height='150vh' width='150vw' onClick={() => handleCLick(currSong.id)}></img>
                }
            </div>
            {sessionUser ?
                <>
                    {/* <p>{sessionUser}</p> */}
                    <EditSong id={currSong.id} className='edit-song-button' />
                    <DeleteSong id={currSong.id} />
                </>
                :
                <></>}
            {/* comments section */}
            <div>
                <NewComment user={sessionUser} />
                <CommentsArea user={sessionUser} />
            </div>
        </div>
    )
}

export default SpecificSong;

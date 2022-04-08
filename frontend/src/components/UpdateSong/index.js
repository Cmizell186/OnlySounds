import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editSpecificSong } from "../../store/songs";
import './UpdateSong.css';

function UpdateSong() {
    const dispatch = useDispatch();
    const history = useHistory();
    const currSong = useSelector(state => state.song.currentSong)
    const [title, setTitle] = useState(currSong.title)
    const [imageUrl, setImageUrl] = useState(currSong.imageUrl)

    const handleClick = async e => {
        e.preventDefault();

        const updatedSong = {
            id: currSong.id,
            title,
            imageUrl
        }
        const song = await dispatch(editSpecificSong(updatedSong))

        history.push(`/songs/${currSong.id}`)
    }
    return (
        <div id="update-song-container">
            <h1 className="edit-song-title">🎧Edit Song🎧</h1>
            <form className="update-song-form" onSubmit={handleClick}>
                <input
                    type='text'
                    required
                    placeholder="Change Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='title-change-input'
                />
                <input
                    type='url'
                    required
                    placeholder="Change Image Url"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    className='imageUrl-change-input'
                />
                <button type='submit' className="edit-song-btn">Edit Song</button>
            </form>
        </div>
    )
}

export default UpdateSong;

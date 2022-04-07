import React, { useState, useEffect } from "react";
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

        if (song) {
            history.push(`/songs/${currSong.id}`)
        }
    }
    return (
        <div className="update-song-container">
            <form className="update-song-form" onSubmit={handleClick}>
                <input
                    type='text'
                    required
                    placeholder="Change Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type='url'
                    required
                    placeholder="Change Image Url"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                />
                <button type='submit'>Edit Song</button>
            </form>
        </div>
    )
}

export default UpdateSong;

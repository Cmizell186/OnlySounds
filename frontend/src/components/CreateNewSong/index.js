import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { createNewSong } from '../../store/songs';
import './CreateNewSong.css';

function CreateNewSong() {
    // useStates
    const [title, setTitle] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSong = {
            userId: sessionUser.id,
            title,
            imageUrl,
            songUrl
        };

        let createdSong = await dispatch(createNewSong(newSong));
        if (createdSong) {
            history.push(`/discover`)
            return (
                <Redirect to='/' />
            )
        }
    }
    if (sessionUser) {
        return (
            <div id="newSong-container">
                <h1>🎧Upload Your Music🎧</h1>
                <form className='temp' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name="title"
                        placeholder='Song Title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className='song-title-input'
                    />
                    <input
                        type='url'
                        name='imageUrl'
                        placeholder='imageUrl'
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        className='imageUrl-input'
                    />
                    <input
                        type='url'
                        name='songUrl'
                        placeholder='songUrl'
                        onChange={(e) => setSongUrl(e.target.value)}
                        value={songUrl}
                        className='songUrl-input'
                    />
                    <button type='submit' className='submit-song-button'>Upload New Song</button>
                </form>
            </div>
        )
    } else {
        return (
            <Redirect to='/'/>
        )
    }
}

export default CreateNewSong;

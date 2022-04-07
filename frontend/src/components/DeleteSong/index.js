import React from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteSpecificSong} from '../../store/songs';
function DeleteSong({id}) {
    console.log(id);
    const dispatch = useDispatch();
    const history = useHistory();

   const handleClick = async (e) =>{
        e.preventDefault()

        const song = {
            id: id
        }
        const deleteSong = await dispatch(deleteSpecificSong(song))
        if(deleteSong === 'success'){
            history.push('/discover');
        }
    }

    return (
        <div>
            <button type='submit' onClick={handleClick}>Delete Song</button>
        </div>
    )
}

export default DeleteSong;

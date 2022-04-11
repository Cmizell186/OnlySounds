import React from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteSpecificSong} from '../../store/songs';
function DeleteSong({id}) {
    const dispatch = useDispatch();
    const history = useHistory();

   const handleClick = async (e) =>{
        e.preventDefault()

        const song = {
            id: id
        }
        console.log(id, song);
        dispatch(deleteSpecificSong(song.id))

        history.push('/discover');
    }

    return (
        <div>
            <div onClick={handleClick} className='delete-song'>Delete Song</div>
        </div>
    )
}

export default DeleteSong;

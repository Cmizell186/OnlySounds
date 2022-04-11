import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewComment } from "../../store/comments";
import { getAllSongs } from '../../store/songs';

function NewComment() {
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);



    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            songId: id,
            userId: user.id,
            description: description
        }
        dispatch(createNewComment(newComment))
        dispatch(getAllSongs())

        setDescription('');
    }

    return (
        <div className="new-comment-input">
            <form onSubmit={(e) => handleSubmit(e)} className="create-comment-form">
                <input
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder='new comment'
                    className="comment-text-input"
                />
                <button type='submit' className="create-comment-button">POST</button>
            </form>
        </div>
    )
}
export default NewComment;

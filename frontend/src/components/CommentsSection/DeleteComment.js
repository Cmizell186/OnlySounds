import React from "react";
import { useDispatch } from "react-redux";
import { deleteSpecificComment } from "../../store/comments";
import { getAllSongs } from '../../store/songs';

function DeleteComment({commentId, songId}) {

    const dispatch = useDispatch();
    const onClick = () =>{
        const comment = {
            commentId,
            songId
        }
        dispatch(deleteSpecificComment(comment))
        dispatch(getAllSongs())
    }
    return (
        <button onClick={onClick} className="delete-comment-button">Delete</button>
    )
}

export default DeleteComment;

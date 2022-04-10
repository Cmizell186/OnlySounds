import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewComment } from "../../store/comments";

function NewComment(){
    const [description, setDescription] = useState('');
    const {id} = useParams();
    const dispatch = useDispatch();
    const user = (state => state.session.user);



    const handleSubmit = (e) =>{
        e.preventDefault()
        const newComment = {
            songId: id,
            userId: user.id,
            body:description
        }
        dispatch(createNewComment(newComment))
            .then(() => setDescription(''));
    }

    return(
        <div className="new-comment-input">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder='new comment'
                />
                <button type='submit'>POST</button>
            </form>
        </div>
    )
}
export default NewComment;

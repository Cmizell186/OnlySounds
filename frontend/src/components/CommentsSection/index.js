import React, { useEffect, useState } from 'react';
import './CommentsSection.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllComments } from '../../store/comments';
import DeleteComment from './DeleteComment';
function CommentsArea({ user }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
    const commentList = useSelector(state => state.song.songs);
    const sessionUser = useSelector(state => state.session.user);
    // console.log(Object.values(commentList))
    let filtered = Object.values(commentList).filter(comment => {
        return comment.id === +id
    })
    console.log(filtered);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllComments(id))
            .then(() => setIsLoaded(true))
    }, [dispatch])


    return (
        <div className='comments-section'>
            {isLoaded && filtered[0].Comments?.map((comment, idx) => (
                <div key={idx} className='individual-comment'>
                    <p>{comment?.User.username}</p>
                    <p>{comment?.description}</p>
                    {comment?.User.id === sessionUser.id ?
                        <DeleteComment songId={id} commentId={comment?.id}/> :
                        null
                    }
                </div>
            ))}
        </div>
    )
}

export default CommentsArea;

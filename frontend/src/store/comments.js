import { csrfFetch } from "./csrf";

// actions
const GET_COMMENTS = 'comments/getComments';
const getComments = (data) => {
    return {
        type: GET_COMMENTS,
        data
    }
}




// thunk functions
export const getAllComments = (songId) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${songId}`);
    const commentList = await response.json();

    dispatch(getComments(commentList));

    return commentList;
}

export const createNewComment = (newComment) => async dispatch => {
    const request = {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    }
    const response = await csrfFetch(`/api/comments/${newComment.songId}`, request)

    const comment = await response.json();
    dispatch(getAllComments(comment.songId));
    return comment;
}

export const deleteSpecificComment = (comment) => async dispatch => {
    const request = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }
    const response = await csrfFetch(`/api/comments/${comment.commentId}`, request)

    const deletedComment = await response.json();
    if (deletedComment){
        dispatch(getComments(comment.songId))
    }
}


const initialState = { comments: {} }

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
            newState = { ...state }
            newState.comments = action.data
            return newState;
        default:
            return state;
    }
}

export default commentReducer;

import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getComments';
const SET_COMMENT = 'comments/setComment';
const DELETE_COMMENT = 'comments/deleteComment';
// actions
const getComments = (data) =>{
    return{
        type:GET_COMMENTS,
        data
    }
}
const setComment = (data) =>{
    return{
        type: SET_COMMENT,
        data
    }
}
const deleteComment = (data) =>{
    return {
        type: DELETE_COMMENT,
        data
    }
}

// thunk functions
export const createNewComment = (newComment) => async dispatch =>{
    const request = {
        method: "POST",
        header: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newComment)
    }
    const response = await csrfFetch(`/api/comments`, request)

    const comment = await response.json();
    dispatch(setComment(comment));
    return comment;
}


const initialState = {comments:{}}

const commentReducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case GET_COMMENTS:
            newState = {...state}
            newState.comments = action.payload
            return newState;
        case SET_COMMENT:
            newState = {...state}
            newState.comments = action.payload
            return newState
        case DELETE_COMMENT:
            newState = {...state}
            newState.comments = action.payload
            return newState
        default:
            return state;
    }
}

export default commentReducer;
